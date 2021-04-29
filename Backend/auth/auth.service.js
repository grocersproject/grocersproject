'use strict';
const jwt = require('jsonwebtoken');
var User = require('../api/users/users.model');



var isAuthenticated = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(200).send({ status: 'failure', data: [], message: 'Please login to perform this action' });
    }
    try {
        const token = req.headers.authorization;
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.json({ status: 'failure', data: [], message: 'Authentication failed' });
    }
};

exports.isAuthenticated = isAuthenticated;