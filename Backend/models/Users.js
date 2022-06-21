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
    password: {},
    phone_number: {
        type: number,
        required: []
    }
})

module.exports = mongoose.model('User', UserSchema)