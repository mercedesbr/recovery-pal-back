
var mongoose = require('mongoose')
const multer = require('multer');



var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './uploads');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });

 const upload = multer({ storage: storage });

exports.uploadFile = upload.any(), async function (req, res, next){
    if (!req.file){
        console.log("no file received");
        return res.send(
            "no file received"
        )
    } else {
        console.log('file received');
        return res.send(req.file);
    }
}