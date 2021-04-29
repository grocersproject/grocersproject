'use strict';

var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
const saltRounds = 10;

var UserSchema = new Schema({
        name: String,
        email: { type: String, lowercase: true },
        password: String
    })
UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('User', UserSchema);