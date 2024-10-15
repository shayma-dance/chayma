const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  
  age: {
    type: Number,
    min: 0
  },
  imageUrl: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['user', 'coach'],
    default: 'user'
  }
}, { timestamps: true });

userSchema.virtual('courses', {
  ref: 'Course', 
  localField: '_id', 
  foreignField: 'coach', 
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });



const User = mongoose.model('User', userSchema);

module.exports = User;
