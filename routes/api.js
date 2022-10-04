/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var patients = require('./api/patient.route')

router.use('/patients', patients);

module.exports = router;
