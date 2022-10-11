var express = require('express')
var router = express.Router()
var FileController = require('../../controllers/File.controller')
var Authorization = require('../../auth/authorization');


router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/file.routes');
  });
router.post('/upload', FileController.uploadFile)

module.exports = router;