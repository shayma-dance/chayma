const express = require("express");
const User = require("../Models/database/User.js");

const router = express.Router();
const{createuser,allusers,oneuser,updateuser,deleteuser}= require("../Controller/User.js")

router.post("/users", createuser);


router.get("/users", allusers);


router.get("/users/:id", oneuser);


router.put("/users/:id", updateuser);


router.delete("/users/:id", deleteuser);

module.exports = router;
