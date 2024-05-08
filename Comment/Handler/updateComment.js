const comment = require('../Schema/Comment');

exports.updateComment = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const update_Comment = await comment.findOneAndUpdate({_id: id}, request.payload);
        console.log(update_Comment);
        return update_Comment;
    } catch (error) {
        console.log(error);
        return error;
    }
}