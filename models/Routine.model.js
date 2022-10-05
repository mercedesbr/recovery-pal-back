var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var RoutineSchema = new mongoose.Schema({
    idPacient:{ type: mongoose.Types.ObjectId, ref: 'pacient' },
    idDoctor: { type: mongoose.Types.ObjectId, ref: 'doctor' },
    idExercises: [{ type: mongoose.Types.ObjectId, ref: 'exercise' }],
    idFeedbacks: [{ type: mongoose.Types.ObjectId, ref: 'feedback' }],
    schedule : {
        weeks: Number,
        times: Number
    }

})

RoutineSchema.plugin(mongoosePaginate)
const Routine = mongoose.model('Routine', RoutineSchema)

module.exports = Routine;

