const mongoose = require('mongoose');

const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Tell us your Name'],
  },
  email: {
    type: String,
    required: [true, 'Please Provide email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide correct Email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm Password'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports=User;
