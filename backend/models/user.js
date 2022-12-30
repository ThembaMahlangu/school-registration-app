const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  role: String,
  school: String,
  parentCode: String,
  teacherCode: String,
  principalCode: String
});

module.exports = mongoose.model('User', userSchema);