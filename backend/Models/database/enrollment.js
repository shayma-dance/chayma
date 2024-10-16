const mongoose = require('mongoose');
const enrollschema = new mongoose.Schema({
    status: {
      type: String,
      required: true,
      trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      }, 
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', 
        required: true
      }
  }, { timestamps: true });
  

const Enrollment = mongoose.model('Enroll', enrollschema);
module.exports=Enrollment