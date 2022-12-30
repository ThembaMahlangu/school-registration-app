const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  subject: String,
  date: Date,
  message: String,
  principal: String,
  school: String
});

module.exports = mongoose.model('Meeting', meetingSchema);