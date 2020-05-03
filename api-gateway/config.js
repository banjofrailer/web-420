/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   3 May 2020
; Modified by: Sarah Kovar
; Description: Global hub for application level configurations.
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config