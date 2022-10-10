var express = require('express')
var router = express.Router()
var FeedbackController = require('../../controllers/Feedback.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/', FeedbackController.getFeedback);

// Export the Router
module.exports = router;