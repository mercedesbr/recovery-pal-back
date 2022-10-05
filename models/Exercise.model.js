var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ExerciseSchema = new mongoose.Schema({
    instructions: Number,
    idDoctor: { type: mongoose.Types.ObjectId, ref: 'doctor' },
    videoTitle: String,
    videoURL: String

})

ExerciseSchema.plugin(mongoosePaginate)
const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise;