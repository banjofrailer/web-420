/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   10 May 2020
; Modified by: Sarah Kovar
; Description: Creates route for index.
;===========================================
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
