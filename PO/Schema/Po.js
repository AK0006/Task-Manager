const mongoose = require('mongoose');

const poSchema = new mongoose.Schema({
    Po: [{
        name: {type: String, required: true}
    }]
});

module.exports = mongoose.model('poSchema', poSchema);