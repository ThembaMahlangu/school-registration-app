const express = require('express');
const router = express.Router();
const Homework = require('../models/homework');
const Feedback = require('../models/feedback');

router.get('/homework', (req, res) => {
    // Fetch the list of homework assignments for the current user's child from the database
    Homework.find({ child: req.user.child })
      .then(homework => {
        // If homework is retrieved successfully, send data
        res.send(homework);
      })
      .catch(err => {
        // If there is an error, send a message
        res.status(400).send({ message: err.message });
      });
  });
  
router.get('/feedback', (req, res) => {
    // Fetch the list of feedback for the current user's child from the database
    Feedback.find({ child: req.user.child })
      .then(feedback => {
        // If feedback is retrieved successfully, send data
        res.send(feedback);
      })
      .catch(err => {
        // If there is an error, send a message
        res.status(400).send({ message: err.message });
      });
  });
  
module.exports = router;  