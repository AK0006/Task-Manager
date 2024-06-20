const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    Age: {type: Number, required: true},
    Mobilenumber: {type: Number, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true},
    test: {
        type: mongoose.Schema.Types.Array,
        ref: 'testSchema'
    }
}, {timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}}
);

module.exports = mongoose.model('ProfileSchema', ProfileSchema);