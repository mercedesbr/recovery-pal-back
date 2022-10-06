var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ObjectId = mongoose.Schema.ObjectId;
var DoctorSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    exercises: [{ type: mongoose.Types.ObjectId, ref: 'exercise' }],
    patients: [{ type: mongoose.Types.ObjectId, ref: 'patient' }],
    routines: [{ type: mongoose.Types.ObjectId, ref: 'routine' }]
})

DoctorSchema.plugin(mongoosePaginate)
const Doctor = mongoose.model('Doctor', DoctorSchema)

module.exports = Doctor;