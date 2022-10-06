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
        if (e.name === "CastError") {
            throw Error("Incorrect ID")
        }
        console.log(e)
        throw Error("And Error occured while getting the Exercise");
    }
}


exports.putExercise = async function (filter, changes) {
    try {
        //var exercise = await Exercise.findOne(filtro)
        /*
        // No necesito ahora que me devuelva el que insertó. Por alguna razon el PUT no me lo muestra en data.

        var exercise = await Exercise.findOneAndUpdate(filter, changes, {
            new: true
          })
          */
        await Exercise.updateOne(filter, changes)
        return ;
    } catch (e) {
        if (e.name === "CastError") {
            throw Error("Incorrect ID")
        }
        console.log(e)
        throw Error("And Error occured while putting the Exercise");
    }
}

exports.postExercise = async function (inserts) {
    try {
        var inserted 
        newExercise = new Exercise(inserts)
        newExercise.save()
        return newExercise;
    } catch (e) {
        console.log(e)
        throw Error("And Error occured while saving the Exercise");
    }
}

exports.deleteExercise = async function (filtro) {
    try {
        //var exercise = await Exercise.findOne(filtro)
        var exercise = await Exercise.findOneAndDelete(filtro)
        return exercise;
    } catch (e) {
        if (e.name === "CastError") {
            throw Error("Incorrect ID")
        }
        console.log(e)
        throw Error("And Error occured while deletting the Exercise");

    }
}


