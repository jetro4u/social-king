const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');

// const Shop = mongoose.model('../models/Shop');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('hit index page');
  
  res.send('Hello World')
});

router.get('/error', (req, res) => res.render('error', { message: 'Something went wrong!' }));

module.exports = router;
