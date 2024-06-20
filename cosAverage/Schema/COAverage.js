const { object } = require('joi');
const mongoose = require('mongoose');

const coAverageSchema = new mongoose.Schema({
    poAverage: {type: Object, required: false}
});

module.exports = mongoose.model('coAverageSchema', coAverageSchema)