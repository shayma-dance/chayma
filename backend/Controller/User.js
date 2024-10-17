const User = require("../Models/database/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User registration with password and confirmPassword validation
exports.createuser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, age, role } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Validate the role (default to 'user' if none provided)
    const validRoles = ["user", "coach"];
    const userRole = validRoles.includes(role) ? role : "user";

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      age,
      role: userRole, // Set the selected role (user or coach)
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ msg: "User registered successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, "mySecretToken", { expiresIn: "1h" });

    res.json({ token, role: user.role, userId: user.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude password field for security
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getAllCoaches = async (req, res) => {
  try {
    const coaches = await User.find({ role: "coach" }).select("-password"); // Fetch all users with role 'coach' and exclude password field
    res.status(200).json(coaches); // Return the coaches as JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
