const { types, required } = require('joi');
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

module.exports = mongoose.model('testSchema', testSchema);