const { required } = require('joi');
const mongoose = require('mongoose');

const coSchema = new mongoose.Schema({
    name: {type: String, required: true},
    CO: [{
        name: {type: String, required: true},
        Po_id : {type: mongoose.Schema.Types.ObjectId,
            ref: 'poSchema'
        },
        Weight: {type: Number, required: true},
        _id: false
    }]
});

module.exports = mongoose.model('coSchema', coSchema);