// Gettign the Newly created Mongoose Model we just created 
var Exercise = require('../models/Exercise.model');
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List

exports.getExercise = async function (filtro) {
    try {
        //var exercise = await Exercise.findOne(filtro)
        var exercise = await Exercise.find(filtro)

        return exercise;
    } catch (e) {
        console.log(e)
        throw Error("And Error occured while getting the Exercise");
    }
}
