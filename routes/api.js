/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var patients = require('./api/patient.route')
var doctors = require('./api/doctor.route')

router.use('/patients', patients);
router.use('/doctors', doctors);

module.exports = router;
