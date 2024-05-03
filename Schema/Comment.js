const { required, ref } = require('joi');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    Comment: {type: String, required: true},
    Sender_id: {type: String, required: true},
    Receiver_id: {type: String, required: true},
    Task_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'taskSchema'
    }
});

module.exports = mongoose.model('commentSchema', commentSchema);