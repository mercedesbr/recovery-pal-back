var express = require('express')
var router = express.Router()
var RoutineController = require('../../controllers/Routine.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/Routine.routes');
  });


router.post('/', RoutineController.createRoutine)
router.post('/getRoutine',RoutineController.getRoutine)

// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login