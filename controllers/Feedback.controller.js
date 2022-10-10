var FeedbackService = require('../services/Feedback.service');
var mongoose = require('mongoose')

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List

exports.getFeedback = async function (req, res, next){
    // Req.Body contains the form submit values.
    console.log("llegue al controller")
    
    try {
        // Calling the Service function with the new object from the Request Body
        var feedback = await FeedbackService.getFeedback()
        return res.status(200).json({feedback, message: "Succesfully retrieved Feedback"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: e.message})
    }
}