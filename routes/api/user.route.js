var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user.routes');
  });

router.post('/login', UserController.loginUser)
router.post('/registration', UserController.createUser)
router.put('/updatePass',Authorization, UserController.updatePass)
router.post('/getUserByEmail',Authorization, UserController.getUserByEmail)
router.post('/recuperarPass',UserController.recuperarPass)




// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login