var express = require('express')
var router = express.Router()
var PedroBController = require('../../controllers/pedroB.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */

router.get('/getExerciseById/:_id', PedroBController.getExerciseById)





// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login