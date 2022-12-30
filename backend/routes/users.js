const express = require('express');
const User = require('../models/user');
const School = require('../models/school');
const passport = require('passport');

const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password, role, school } = req.body;
    const newUser = new User({ username, password, role, school });
    User.register(newUser, password, (err) => {
      if (err) {
        res.send(err);
      } else {
        passport.authenticate('local')(req, res, () => {
          res.send(req.user);
        });
      }
    });
  });
  
  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send({ success: false });
      }
      req.logIn(user, (error) => {
        if (error) {
          return next(error);
        }
        return res.send({ success: true, user });
      });
    })(req, res, next);
  });
  
  router.get('/logout', (req, res) => {
    req.logout();
    res.send({ success: true });
  });
  
  module.exports = router;  