const { number, types, required } = require('joi');
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    Age: {type: Number, required: true},
    Mobilenumber: {type: Number, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true},
    Createdat: {type: Date, immutable: true, default: Date.now()}
});

module.exports = mongoose.model('ProfileSchema', ProfileSchema);