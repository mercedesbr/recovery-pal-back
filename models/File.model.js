var mongoose = require('mongoose')

var imageSchema = mongoose.Schema({
    name: {
        type: String
    },
    file: {type: String}
    }
);

var Image = module.exports = mongoose.model('Image', imageSchema);