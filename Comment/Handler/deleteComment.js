const comment = require('../Schema/Comment');

exports.delteComment = async (request, h) => {
    try {
        const id = request.params.id;
        const delete_comment = await comment.findOneAndDelete({_id: id}, request.payload);
        console.log(delete_comment);
        return delete_comment;
    } catch (error) {
        return error;
    }
}