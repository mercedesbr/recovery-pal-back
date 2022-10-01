var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;