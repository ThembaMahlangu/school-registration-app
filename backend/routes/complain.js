const express = require('express');
const Complain = require('../models/complain');

const router = express.Router();

router.post('/', (req, res) => {
  const complain = new Complain(req.body);
  complain.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(complain);
    }
  });
});

router.get('/', (req, res) => {
  Complain.find((err, complains) => {
    if (err) {
      res.send(err);
    } else {
      res.send(complains);
    }
  });
});

router.get('/:principal/:school', (req, res) => {
  const { principal, school } = req.params;
  Complain.find({ principal, school }, (err, complains) => {
    if (err) {
      res.send(err);
    } else {
      res.send(complains);
    }
  });
});

module.exports = router;