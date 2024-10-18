

const express = require("express");
const cors = require("cors");
const courseRoutes = require("./Routes/Courses");
const userRoutes = require("./Routes/Users")
const enrollmentRoutes = require("./Routes/enrollement")


const mongoose = require("mongoose");


const mongoUri = "mongodb://127.0.0.1:27017/dances";
const app = express();
const PORT = 3000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollement", enrollmentRoutes);

// Connect to the database using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1); // Exit the process if connection fails
  }
};

// Start server and connect to the database
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);


});
