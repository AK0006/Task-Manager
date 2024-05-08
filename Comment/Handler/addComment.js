const comment = require('../Schema/Comment');
const task = require('../../Task/Schema/Task');

exports.addComment = async (request, h) => {
    try {
        const taskModel = await task.findOne({_id: request.payload.Task_id});
        const send_id = request.auth.credentials.profile._id;

        const comment_data = Object.assign({}, request.payload, {Sender_id: send_id});
        const add_comment = await comment.create(comment_data);
        return add_comment;
    } catch (error) {
        console.log(error);
        return error 
    }
}