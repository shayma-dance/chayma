const express = require('express');
const router = express.Router();
const { enrollUser, updateEnrollmentStatus ,getpending} = require('../Controller/Enrollment');

// Route  user
router.post('/enroll', enrollUser);

// Route to change  (approve or cancel)
router.put('/enrollment/:id', updateEnrollmentStatus);
router.get('/pending', getpending);

module.exports = router;