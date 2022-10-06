var ExerciseService = require('../services/exercise.service');
var mongoose = require('mongoose');
const { ObjectId } = require('mongoose');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List


exports.getExerciseById = async function (req, res, next){
    if (!req.params._id) {
        return res.status(400).json({status: 400., message: "Exercise ID be present"})
    }
    var filter = {_id : req.params._id}
    console.log(filter)
    try {
        var gettedExercise = await ExerciseService.getExercise(filter)
        console.log(gettedExercise)
        if ( !gettedExercise) {
            return res.status(400).json({status: 400., message: "Exercise ID does not exist"})
        } else {

        return res.status(200).json({status: 200, data: gettedExercise, message: "Succesfully getted Exercise"})
        }
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

