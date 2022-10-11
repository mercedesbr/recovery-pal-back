/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()

var exercises = require('./api/exercise.route')

router.use('/exercise', exercises);

var patients = require('./api/patient.route')
var doctors = require('./api/doctor.route')
var files = require('./api/file.route')

router.use('/patients', patients);
router.use('/doctors', doctors);
router.use('/files', files);
module.exports = router;
