var express = require('express')
var router = express.Router()
var PatientController = require('../../controllers/Patient.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/patient.routes');
  });

router.post('/login', PatientController.loginUser)
router.post('/registration', PatientController.createUser)
router.put('/updatePass',Authorization, PatientController.updatePass)
router.post('/getUserByEmail',Authorization, PatientController.getUserByEmail)
router.post('/recuperarPass',PatientController.recuperarPass)




// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login