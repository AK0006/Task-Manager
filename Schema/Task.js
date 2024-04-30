const mongoose = require('mongoose');
const Profile = require('./Profile');
const { required } = require('joi');

const taskSchema = new mongoose.Schema({
    Profile_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProfileSchema'
    },
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Status: {type: String, required: true},
    CreatedBy: {type: String, required: true},
    AssignedTo: {type: String, required: true},
    startDate: {type: Date, immutable: true, default: Date.now()},
    endDate: {type: Date, default: Date.now()}
}, {timestamps: {
    createdAt: 'create_at',
    updatedAt: false
}}
);


module.exports = mongoose.model('taskSchema', taskSchema)