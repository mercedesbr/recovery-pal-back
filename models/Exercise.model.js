var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ExerciseSchema = new mongoose.Schema({
    idExercise: Number,
    instructions: Number,
    idDoctor: Number,
    videoTitle: String,
    videoURL: String

})

ExerciseSchema.plugin(mongoosePaginate)
const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise;