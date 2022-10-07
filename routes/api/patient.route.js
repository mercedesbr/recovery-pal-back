var express = require('express')
var router = express.Router()
var PatientController = require('../../controllers/Patient.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/patient.routes');
  });


router.post('/registration', PatientController.createUser)
router.post('/getPatient', PatientController.getPatient)

router.post('/recuperarPass',PatientController.recuperarPass)
router.post('/login', PatientController.loginUser)
router.put('/updatePass',Authorization, PatientController.updatePass)


// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login