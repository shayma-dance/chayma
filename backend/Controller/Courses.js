
const Course = require("../Models/database/Courses.js");
const User = require("../Models/database/User.js");

const addcourse= async (req, res) => {
    try {
      const { title, imageUrl, description, coachId } = req.body;
  
      const coach = await User.findById(coachId); 
      if (!coach || coach.role !== 'coach') {
        return res.status(404).json({ message: "Coach not found or invalid role" });
      }
  
      const newCourse = new Course({
        title,
        imageUrl,
        description,
        coach: coachId
      });
  
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse); 
    } catch (err) {
      res.status(500).json({ message: "Error creating course", error: err });
    }
  }  
 const allcourses= async (req, res) => {
    try {
      const courses = await Course.find().populate("coach", "name email role"); 
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json({ message: "Error fetching courses", error: err });
    }
  }
  const onecourse = async (req, res) => {
    try {
      const course = await Course.findById(req.params.id).populate("coach", "name email role");
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json({ message: "Error fetching course", error: err });
    }
  }
  const updatecourse= async (req, res) => {
    try {
      const { title, imageUrl, description, coachId } = req.body;
  
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
     
  
      
      course.title = title || course.title;
      course.imageUrl = imageUrl || course.imageUrl;
      course.description = description || course.description;
  
      const updatedCourse = await course.save();
      res.status(200).json(updatedCourse);
    } catch (err) {
      res.status(500).json({ message: "Error updating course", error: err });
    }
  }
const deletecourse= async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      await course.deleteOne();
  
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (err) {
      console.error("Error deleting course:", err);
      res.status(500).json({ message: "Error deleting course", error: err.message });
    }
  }

  module.exports={addcourse,allcourses,onecourse,updatecourse,deletecourse}