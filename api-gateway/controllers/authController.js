/*
============================================
; Title:  authController.js
; Author: Professor Krasso
; Date:   10 May 2020
; Modified by: Sarah Kovar
; Description: Authorization controller
;===========================================
*/

var User = require('../models/user');

//Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

//Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};