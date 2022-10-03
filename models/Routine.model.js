var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var RoutineSchema = new mongoose.Schema({
    idPacient: String,
    idDoctor: String,
    idExercises: [{type: String}],
    idFeedbacks: [{type: String}],
    schedule : {
        weeks: Number,
        times: Number
    }

})

RoutineSchema.plugin(mongoosePaginate)
const Routine = mongoose.model('Routine', RoutineSchema)

module.exports = Routine;