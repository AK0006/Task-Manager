const mongoose = require('mongoose');
const Profile = require('./Profile');
const { required, optional } = require('joi');

const taskSchema = new mongoose.Schema({
    Title: {type: String, optional: true},
    Description: {type: String, required: true},
    Status: {type: String, required: true},
    CreatedBy: {type: String, required: true},
    CreatedBy_id: {type: String, required: true},
    AssignedTo: {type: String, required: true},
    AssignedTo_id: [String],
    startDate: {type: Date, default: Date.now()},
    endDate: {type: Date, default: Date.now()}
}, {timestamps: {
    createdAt: 'create_at',
    updatedAt: 'update_at'
}}
);


module.exports = mongoose.model('taskSchema', taskSchema)