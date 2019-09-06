const express = require('express');
const mongoose = require('mongoose');
const despatch = require('../models/despatch register');

const router = express.Router();

const db =' mongodb://localhost/SurveyDB';


mongoose.connect(db, {useNewUrlParser : true})
.then(console.log('connected succesfully'))
.catch( err => console.log(err));

module.exports = router;