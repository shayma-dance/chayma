const User = require('../Models/database/User');

User.find()
  .populate('courses') 
  .then(user => {
    console.log(user.courses); 
  });

  const createuser = async (req, res) => {
    try {
      const { name, email, age, imageUrl, role } = req.body;
  
      const newUser = new User({
        name,
        email,
        age,
        imageUrl,
        role,
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser); 
    } catch (err) {
      res.status(500).json({ message: "Error creating user", error: err });
    }
  }
  const allusers=async (req, res) => {
    try {
      const users = await User.find().populate("courses"); 
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: "Error fetching users", error: err });
    }
  }
  const oneuser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("courses"); 
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "Error fetching user", error: err });
    }
  }
  const updateuser = async (req, res) => {
    try {
      const { name, email, age, imageUrl, role } = req.body;
  
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      
      user.name = name || user.name;
      user.email = email || user.email;
      user.age = age || user.age;
      user.imageUrl = imageUrl || user.imageUrl;
      user.role = role || user.role;
  
      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Error updating user", error: err });
    }
  }
  const deleteuser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      await user.deleteOne();
  
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(500).json({ message: "Error deleting user", error: err.message });
    }
  }
  
  module.exports={createuser,allusers,oneuser,updateuser,deleteuser}
