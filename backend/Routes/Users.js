const express = require("express");
const { createuser, login} = require("../Controller/User.js");

<<<<<<< HEAD
const { createuser, login ,  getAllUsers ,updateProfile } = require("../Controller/User.js");
=======
>>>>>>> 5b0ad82d13b1814ede0134ce4d3004d58e03973d

const router = express.Router();

// Register a new user
router.post("/register", createuser);

// User login
router.post("/login", login);

<<<<<<< HEAD
// Get all users
router.get("/AllUsers", getAllUsers);
router.put('/:userId', updateProfile);



=======
>>>>>>> 5b0ad82d13b1814ede0134ce4d3004d58e03973d


module.exports = router;
