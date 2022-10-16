const router = require("express").Router();
const storage = require("../../utils/multer");
const videoController = require("../../controllers/Video.controller");


router.post('/uploadVideo', storage.single('video'), videoController.uploadVideo);

module.exports = router;