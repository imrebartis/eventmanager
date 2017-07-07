/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Connection error');
    }
});

//Get Current User
router.get('/user/:id', (req, res, next) => {
  let user = req.params.id;
    User
    .findById({_id: user})
    .exec((err, user) => {
      if (err) {
        next(err);
        return;
      }
  res.json(user);
    });
});


//Get Users
router.get('/users', (req, res, next) => {
  User.find((err,users)=>{
    if (err) res.status(401).json({message:"not found"});
  else{

  res.json({users});
  }
  });
});


module.exports = router;
