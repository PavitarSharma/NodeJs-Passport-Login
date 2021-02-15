const mongoose = require('mongoose');

const UserSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    }
});

const User = mongoose.model('User'. User,Schema);

module.exports = User;