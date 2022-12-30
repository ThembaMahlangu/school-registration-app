const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
  subject: String,
  message: String,
  principal: String,
  school: String
});

module.exports = mongoose.model('Complain', complainSchema);