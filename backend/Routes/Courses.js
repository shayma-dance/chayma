const express = require("express");



const router = express.Router();
const{addcourse,allcourses,onecourse,updatecourse,deletecourse}=require('../Controller/Courses.js')

router.post("/addcourse",addcourse)

router.get("/courses", allcourses);


router.get("/courses/:id", onecourse);


router.put("/courses/:id", updatecourse);


router.delete("/courses/:id", deletecourse);

module.exports = router;
