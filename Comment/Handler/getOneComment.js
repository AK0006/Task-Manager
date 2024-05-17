const comment = require('../Schema/Comment');

exports.getOneComment = async (request, h) => {
    try {
        const id = request.params.id;
        const get_OneComment = await comment.findOneAndDelete({_id: id}, request.payload);
        return {
            statuscode: 200,
            message: "Get only by Id",
            data: get_OneComment
        }
    } catch (error) {
        throw error;
    }
}