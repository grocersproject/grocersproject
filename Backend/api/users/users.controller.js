'use strict';

var User = require('./users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



var validationError = function(res, err) {
    return res.status(422).json({ status: 'failure', data: err, msg: 'Something went wrong' });
};
/**
 * Creates a new user
 */
exports.signUp = function(req, res, next) {
    if (!req.body.name || req.body.name == '') {
        return res.json({ status: 'failure', data: [], message: 'Please provide name' });
    }
    if (!req.body.password || req.body.password == '') {
        return res.json({ status: 'failure', data: [], message: 'Please provide password' });
    }
    if (!req.body.email || req.body.email == '') {
        return res.json({ status: 'failure', data: [], message: 'Please provide the Email Id' });
    }

  

    let new_user_body = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    
    }
    var newUser = new User(new_user_body);
    const umail = req.body.email.toLowerCase();
    var UserObj = User.findOne({ $or: [{ email: umail }] });
    //console.log(UserObj);
    User.findOne({ $or: [{ email: umail }] }, function(err, userfound) {
        //handling any query errors
        if (err) { return handleError(res, err); }

        if (userfound) {
            //user already exists in database, return here
            if (userfound.email == umail) {
                res.json({ status: "failure", data: [], msg: "Email is already used !!!" });
            } else {
                res.json({ status: "failure", data: [], msg: "Mobile num is already used !!!" });
            }
        } else {
            var newUser = new User(new_user_body);
            newUser.save().then((result) => {
                res.json({ status: "success", data: result, message: "User registered Successfully" });
            }).catch((err) => {
    
                res.json({ status: "failure", data: err, message: "Something Went Wrong" });
            });
        }
    })
}

/**
 * USER Login with mobile num
 */
exports.login = function(req, res, next) {
//console.log(req.body.password)
if (!req.body.email || req.body.email == '') {
    return res.json({ status: 'failure', data: [], message: 'Please provide the Email Id' });
}
if (!req.body.password || req.body.password == '') {
    return res.json({ status: 'failure', data: [], message: 'Please provide the Password' });
}

 
    User.findOne({ email: req.body.email }, function(err, userInfo) {
        if (err) {
            res.json({ status: "failure", data: err, message: "Something Went Wrong" });
        } else {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({ _id: userInfo._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                User.updateOne({ _id: userInfo._id }, function(err1, response) {
                    if (err1) {
                        res.json({ status: "failure", data: [], message: "Something Went Wrong" });
                    }
                    if (response.nModified) {
                        // console.log(response);
                    } else {
                        // res.json({ status: 'success', data: [], msg: 'Something went wrong. Please try again !!!' });
                        // console.log('Changes already Done ');
                    }
                })
                res.json({ status: "success", token: token, message: "Login Successful" })
            } else {
                res.json({ status: "failure", data: [], message: "Invalid Password !!" })
            }
        }
    })
}


exports.getProfile = function(req, res, next) {
    User.findById(req.user._id, '_id name email', { lean: true }, function(err, userInfo) {
        if (err) { return handleError(err, res); }
        // console.log(userInfo)
        if (userInfo) {
            res.json({ status: "success", data: userInfo, message: "User details retrived" });
        } else {
            res.json({ status: "failure", data: [], message: "User Info not Found" });
        }
    });
}

exports.getAllUsers=function(req,res){
   
    User.find({},function(err,data){
        if(err) return res.json({status:"failure",data:[],msg:"something went wrong"})
        return  res.json({status:"success",data:data,msg:"data retrived"})
    })
}