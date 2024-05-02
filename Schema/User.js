const { ref, required } = require('joi');
const { MongoServerClosedError } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: String,
    role: [String],
    password: String,
    Profile_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProfileSchema'
    }
});

module.exports = mongoose.model('UserSchema', UserSchema);