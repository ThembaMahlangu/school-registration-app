const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password, role, school, parentCode, teacherCode, principalCode } = req.body;
  const newUser = new User({ name, email, password, role, school, parentCode, teacherCode, principalCode });
  newUser.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(newUser);
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (!user) {
      res.send({ success: false });
    } else {
      res.send({ success: true, user });
    }
  });
});

router.get('/logout', (req, res) => {
  res.send({ success: true });
});

module.exports = router;