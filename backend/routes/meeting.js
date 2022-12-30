const express = require('express');
const Meeting = require('../models/meeting');

const router = express.Router();

router.post('/', (req, res) => {
  const meeting = new Meeting(req.body);
  meeting.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(meeting);
    }
  });
});

router.get('/', (req, res) => {
  Meeting.find((err, meetings) => {
    if (err) {
      res.send(err);
    } else {
      res.send(meetings);
    }
  });
});

router.get('/:principal/:school', (req, res) => {
    const { principal, school } = req.params;
    Meeting.find({ principal, school }, (err, meetings) => {
      if (err) {
        res.send(err);
      } else {
        res.send(meetings);
      }
    });
  });
  
  module.exports = router;  