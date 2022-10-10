// Gettign the Newly created Mongoose Model we just created 
var Feedback = require('../models/Feedback.model');

var mongoose = require('mongoose')

// Saving the context of this module inside the _the variable
_this = this

exports.getFeedback = async function (){
    try {
        var feedback = await Feedback.find({})
        return feedback
    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while finding feedback');
    }
}