const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [],
        trim: true
    },
    email: {
        type: String,
        required: [],

    },
    password: {
        type: String 
    },
    phone_number: {
        type: Number,
        required: []
    },
    date_Created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users', UserSchema)