const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  school: String
});

module.exports = mongoose.model('User', userSchema);