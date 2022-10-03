var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var PatientSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    idRoutine: String,
    idDoctor: String
})

PatientSchema.plugin(mongoosePaginate)
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient;