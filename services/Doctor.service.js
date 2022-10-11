// Gettign the Newly created Mongoose Model we just created 
var Doctor = require('../models/Doctor.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List


exports.createUser = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    
    var newUser = new Doctor({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword
    })
    var filtro = {
        email: user.email
    }
    var bandera = await this.chequearMail(filtro)
    if(bandera){
        try {
            // Saving the User 
            var savedUser = await newUser.save();
            var token = jwt.sign({
                id: savedUser._id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            return token;
        } catch (e) {
            // return a Error message describing the reason 
            console.log(e)    
            throw Error("Error while Creating User")
        }
    }else{
        throw Error("El usuario ya está registrado")
    }
}

exports.chequearMail = async function (query){
    try {
        console.log("Query",query)
        var user = await Doctor.findOne(query)
        var bandera = user ? false : true
        return bandera
        

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while checking email');
    }
}

exports.getDoctor = async function (query){
    try {
        console.log("Query",query)
        var doctor = await Doctor.findOne(query).populate([{
            path: 'routines',
            model: 'Routine'
        }, {
            path: 'exercises',
            model: 'Exercise'
        }, {
            path: 'patients',
            model: 'Patient'
        }])
        return doctor
    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while finding doctor');
    }
}