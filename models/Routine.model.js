var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ObjectId = mongoose.Schema.ObjectId;
var RoutineSchema = new mongoose.Schema({
    patient: { type: mongoose.Types.ObjectId, ref: 'patient' },
    doctor: { type: mongoose.Types.ObjectId, ref: 'doctor' },
    name: String,
    exercises: [{ type: mongoose.Types.ObjectId, ref: 'exercise' }],
    feedbacks: [{ type: mongoose.Types.ObjectId, ref: 'feedback' }],
    schedule:{
        weeks: Number,
        times: Number
    }
})

RoutineSchema.plugin(mongoosePaginate)
const Routine = mongoose.model('Routine', RoutineSchema)

module.exports = Routine;