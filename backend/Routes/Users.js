const express = require("express");
const { createuser, login ,  getAllUsers } = require("../Controller/User.js");

const router = express.Router();

// Register a new user
router.post("/register", createuser);

// User login
router.post("/login", login);

// Get all users
router.get("/AllUsers", getAllUsers);

module.exports = router;
