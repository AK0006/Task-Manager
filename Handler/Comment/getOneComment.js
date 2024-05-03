const comment = require('../../Schema/Comment');

exports.getOneComment = async (request, h) => {
    try {
        const id = request.params.id;
        const get_OneComment = await comment.findOneAndDelete({_id: id}, request.payload);
        console.log(get_OneComment);
        return get_OneComment
    } catch (error) {
        return error;
    }
}