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

const User = module.exports = mongoose.model('User', userSchema);

//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
        User.findById(query, callback);
};