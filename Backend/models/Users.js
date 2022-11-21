const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [],
    trim: true
  },
  username: {
    type: String,
    required: []

  },
  email: {
    type: String,
    default: ''
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
});

module.exports = mongoose.model('Users', UserSchema);
