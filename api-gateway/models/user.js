/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   10 May 2020
; Modified by: Sarah Kovar
; Description: Create user model and schema
;===========================================
*/

//fields for username, password, and email
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);