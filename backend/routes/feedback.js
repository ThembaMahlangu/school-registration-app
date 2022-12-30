const express = require('express');
const Feedback = require('../models/feedback');

const router = express.Router();

router.post('/', (req, res) => {
  const feedback = new Feedback(req.body);
  feedback.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(feedback);
    }
  });
});

router.get('/', (req, res) => {
  Feedback.find((err, feedbacks) => {
    if (err) {
      res.send(err);
    } else {
      res.send(feedbacks);
    }
  });
});

router.get('/:teacher/:school/:student', (req, res) => {
  const { teacher, school, student } = req.params;
  Feedback.find({ teacher, school, student }, (err, feedbacks) => {
    if (err) {
      res.send(err);
    } else {
      res.send(feedbacks);
    }
  });
});

module.exports = router;