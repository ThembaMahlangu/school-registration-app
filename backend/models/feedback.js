const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  subject: String,
  message: String,
  teacher: String,
  school: String,
  student: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);