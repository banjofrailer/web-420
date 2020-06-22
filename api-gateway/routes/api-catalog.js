/*
============================================
; Title:  api-catalog.js
; Author: Professor Krasso
; Date:   10 May 2020
; Modified by: Sarah Kovar
; Description: Setup for API routes
;===========================================
*/

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token')

//POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//POST request for user logins
router.post('/auth/login', auth_controller.user_login);

//GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

//GET request for allowing user logout requests
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;