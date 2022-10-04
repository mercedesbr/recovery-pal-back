var PatientService = require('../services/Patient.service');
var mongoose = require('mongoose')
var MailController = require('./mail.controller')

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List

exports.loginUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var User = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var loginUser = await PatientService.loginUser(User);
        return res.status(201).json({loginUser, message: "Succesfully login"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.createUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mascota: req.body.mascota,
        telefono: req.body.telefono
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdUser = await PatientService.createUser(User)
        return res.status(201).json({createdUser, message: "Succesfully Created User"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: e.message})
    }
}



exports.updatePass = async function (req, res, next) {
    if (!req.body.email) {
        return res.status(400).json({status: 400, message: "Email be present"})
    }
    var User = { 
        email: req.body.email,
        password: req.body.password,
        mascota: req.body.mascota
    }
    try {
        var updatedUser = await PatientService.updatePass(User)
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.recuperarPass = async function (req, res, next) {
    if (!req.body.email) {
        return res.status(400).json({status: 400, message: "Email be present"})
    }
    let password = Math.random().toString(36).slice(-8);
    var User = { 
        email: req.body.email,
        mascota: req.body.mascota,
        password: password
    }
    try {
        var updatedUser = await PatientService.updatePass(User)
        MailController.sendEmail(req,password, res, next);
        return res.status(200).json({status: 200, data: updatedUser, message: "Email succesfully sent"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.getUserByEmail = async function (req, res, next){
    if (!req.body.email) {
        return res.status(400).json({status: 400., message: "Email be present"})
    }
    var filtro = {email : req.body.email}
    try {
        var updatedUser = await PatientService.getUserByEmail(filtro)
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

