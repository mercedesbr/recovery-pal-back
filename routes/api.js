/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var users = require('./api/user.route')
var exercises = require('./api/exercise.route')


router.use('/users', users);
router.use('/exercises', exercises);


module.exports = router;
