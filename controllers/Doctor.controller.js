var DoctorService = require('../services/Doctor.service');
var mongoose = require('mongoose')
var MailController = require('./mail.controller')

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List

exports.createUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var User = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdUser = await DoctorService.createUser(User)
        return res.status(201).json({createdUser, message: "Succesfully Created User"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: e.message})
    }
}