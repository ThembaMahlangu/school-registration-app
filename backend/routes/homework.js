const express = require('express');
const Homework = require('../models/homework');

const router = express.Router();

router.post('/', (req, res) => {
  const homework = new Homework(req.body);
  homework.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(homework);
    }
  });
});

router.get('/', (req, res) => {
  Homework.find((err, homeworks) => {
    if (err) {
      res.send(err);
    } else {
      res.send(homeworks);
    }
  });
});

router.get('/:teacher/:school', (req, res) => {
    const { teacher, school } = req.params;
    Homework.find({ teacher, school }, (err, homeworks) => {
      if (err) {
        res.send(err);
      } else {
        res.send(homeworks);
      }
    });
  });
  
  module.exports = router;  