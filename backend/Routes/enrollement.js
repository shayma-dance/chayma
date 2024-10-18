const express = require("express");
const router = express.Router();
const {
  enrollUser,
  updateEnrollmentStatus,
  getpending,
  enrolledOrNot,
  approved,
  approvedCourses,
} = require("../Controller/Enrollment");
router.post("/enroll", enrollUser);
router.post("/enrolledOrNot", enrolledOrNot);

router.put("/enrollment/:id", updateEnrollmentStatus);
router.get("/pending/:coachId", getpending);
router.get("/approvedcourses/:userId", approvedCourses);
router.get("/approved/:coachId", approved);

module.exports = router;
