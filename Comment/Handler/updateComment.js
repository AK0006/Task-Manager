const comment = require('../Schema/Comment');

exports.updateComment = async (request, h) => {
    try {
        const id = request.params.id;
        const update_Comment = await comment.findOneAndUpdate({_id: id}, request.payload);
        return {
            statuscode: 200,
            message: "find and update",
            data: update_Comment
        };
    } catch (error) {
        throw error;
    }
}