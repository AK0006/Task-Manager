const comment = require('../../Schema/Comment');

exports.getComment = async (request, h) => {
    try {
        const get_comment = await comment.find();
        return get_comment;
    } catch (error) {
        return error
    }
}