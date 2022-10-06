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
    try {
        var gettedExercise = await ExerciseService.getExercise(filter)
        if ( !gettedExercise) {
            return res.status(400).json({status: 400, message: "Exercise ID does not exist"})
        } else {
            return res.status(200).json({status: 200, data: gettedExercise, message: "Succesfully getted Exercise"})
        }
    } catch (e) {
        
            return res.status(400).json({status: 400, message: e.message})

    }
}


exports.putExerciseById = async function (req, res, next){
    if (!req.params._id) {
        return res.status(400).json({status: 400, message: "Exercise ID be present"})
    }
   
    var filter = {_id : req.params._id}
    var changes = {
        doctor: req.body.doctor,
        instructions : req.body.instructions,
        videoTitle: req.body.videoTitle,
        videoURL: req.body.videoURL
    }
    try {
        var gettedExercise = await ExerciseService.getExercise(filter)
        if ( !gettedExercise) {
            return res.status(400).json({status: 400, message: "Exercise ID does not exist"})
        } else {
            //Necesito haber hecho el get antes de hacer el PUT?
            ExerciseService.putExercise(filter, changes)
            return res.status(200).json({status: 200, message: "Succesfully putted Exercise"})
        }
    } catch (e) {
            return res.status(400).json({status: 400, message: e.message})

        
    }
}

exports.postExercise = async function (req, res, next){

    if (!req.body.doctor) {
        // debo detectar que sea un id
        return res.status(400).json({status: 400, message: "Doctor ID be presente"})
    }
    if (!req.body.instructions) {
        return res.status(400).json({status: 400, message: "Instructions be presente"})
    }
    if (!req.body.videoTitle) {
        return res.status(400).json({status: 400, message: "Video Title be presente"})
    }
    if (!req.body.videoURL) {
        return res.status(400).json({status: 400, message: "Video URL be presente"})
    }
    
    var inserted = {
        doctor: req.body.doctor,
        instructions : req.body.instructions,
        videoTitle: req.body.videoTitle,
        videoURL: req.body.videoURL
    }
    try {
        //Necesito haber hecho el get antes de hacer el PUT?
        var puttedExercise = await ExerciseService.postExercise(inserted)
        return res.status(200).json({status: 200, data: puttedExercise, message: "Succesfully postted Exercise"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.deleteExerciseById = async function (req, res, next){
    if (!req.params._id) {
        return res.status(400).json({status: 400., message: "Exercise ID be present"})
    }
    var filter = {_id : req.params._id}
    try {
        var deletedExercise = await ExerciseService.deleteExercise(filter)
        if ( !deletedExercise) {
            return res.status(400).json({status: 400, message: "Exercise ID does not exist"})
        } else {
    
        return res.status(200).json({status: 200, data: deletedExercise, message: "Succesfully deletted Exercise"})
        }
    } catch (e) {
        
            return res.status(400).json({status: 400, message: e.message})

    }
}
