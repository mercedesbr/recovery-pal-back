var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ObjectId = mongoose.Schema.ObjectId;
var RoutineSchema = new mongoose.Schema({
    pacient: mongoose.Types.ObjectId,
    doctor: mongoose.Types.ObjectId,
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