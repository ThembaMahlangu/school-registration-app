const express = require('express');
const router = express.Router();
const Meeting = require('../models/meeting');

router.get('/meetings', (req, res) => {
  // Fetch the list of meetings from the database
  Meeting.find()
    .then(meetings => {
      // If meetings are retrieved successfully, send data
      res.send(meetings);
    })
    .catch(err => {
      // If there is an error, send a message
      res.status(400).send({ message: err.message });
    });
});

router.post('/meetings', (req, res) => {
  // Create a new meeting in the database
  Meeting.create(req.body)
    .then(meeting => {
      // If meeting is created successfully, send meeting data
      res.send(meeting);
    })
    .catch(err => {
      // If there is an error, send a message
      res.status(400).send({ message: err.message });
    });
});

module.exports = router;