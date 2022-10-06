var express = require('express')
var router = express.Router()
var ExerciseController = require('../../controllers/Exercise.controller');
var IdPresent = function (req, res, next) {
    return res.status(400).json({status : 400, message: "Exercise ID be present"})
}

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/', IdPresent)
router.delete('/', IdPresent)
router.put('/', IdPresent)



router.get('/:_id', ExerciseController.getExerciseById)
router.put('/:_id', ExerciseController.putExerciseById)
router.post('/', ExerciseController.postExercise)
router.delete('/:_id', ExerciseController.deleteExerciseById)





// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login