const express = require('express');
const School = require('../models/school');

const router = express.Router();

router.post('/', (req, res) => {
    const school = new School(req.body);
    school.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(school);
      }
    });
  });
  
  router.get('/', (req, res) => {
    School.find((err, schools) => {
      if (err) {
        res.send(err);
      } else {
        res.send(schools);
      }
    });
  });
  
  module.exports = router;  