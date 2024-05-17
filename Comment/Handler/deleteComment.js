const comment = require('../Schema/Comment');

exports.delteComment = async (request, h) => {
    try {
        const id = request.params.id;
        const delete_comment = await comment.findOneAndDelete({_id: id}, request.payload);
        return {
            statuscode: 200,
            message: "comment deleted"
        };
    } catch (error) {
        throw error;
    }
}