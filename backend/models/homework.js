const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
  subject: String,
  content: String,
  source: String,
  dueDate: Date,
  teacher: String,
  school: String
});

module.exports = mongoose.model('Homework', homeworkSchema);