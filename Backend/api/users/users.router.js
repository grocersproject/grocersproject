'use strict';

var express = require('express');
var controller = require('./users.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/signUp', controller.signUp);
router.post('/signIn', controller.login);
router.post('/getProfile', auth.isAuthenticated, controller.getProfile);
router.post('/ ',auth.isAuthenticated,controller.getAllUsers);


module.exports = router;