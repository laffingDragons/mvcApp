var mongoose = require('mongoose');
var express = require('express');

//express router used to define routes
var userRouter = express.Router();



var userModel = mongoose.model('User')
/*var fs = require('fs');

var response = {
	error:false,
	message:null,
	status:200,
	data:null
};*/

module.exports.controller = function (app) {
    userRouter.get('/all', function (req, res) {

        userModel.find({}, function (err, allUsers) {
            if (err) {
                res.send(err);
            } else {
                res.send(allUsers);
            }
        })

        //res.send("this is route to get all users. Write your db code")
    }); //end get all users

    userRouter.get('/:userName', function (req, res) {

        res.send("this is route to get info of particular user")
    }); //end get one user

    //now making it global to app using a middleware
    app.use('v1/users', userRouter);

} //end controller code
