const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: String,
  location: String,
  teacherCode: String,
  parentCode: String,
  principalCode: String
});

module.exports = mongoose.model('School', schoolSchema);