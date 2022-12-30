const express = require('express');
const router = express.Router();
const Homework = require('../models/homework');
const Feedback = require('../models/feedback');

router.get('/homework', (req, res) => {
  // Fetch the list of homework assignments from the database
  Homework.find()
    .then(homework => {
      // If homework is retrieved successfully, send data
      res.send(homework);
    })
    .catch(err => {
      // If there is an error, send a message
      res.status(400).send({ message: err.message });
    });
});

router.post('/homework', (req, res) => {
  // Create a new homework assignment in the database
  Homework.create(req.body)
    .then(homework => {
      // If homework is created successfully, send homework data
      res.send(homework);
    })
    .catch(err => {
      // If there is an error, send a message
      res.status(400).send({ message: err.message });
    });
});

router.post('/feedback', (req, res) => {
  // Create new feedback for a parent in the database
  Feedback.create(req.body)
    .then(feedback => {
      // If feedback is created successfully, send feedback data
      res.send(feedback);
    })
    .catch(err => {
      // If there is an error, send a message
      res.status(400).send({ message: err.message });
    });
});

module.exports = router;