const comment = require('../Schema/Comment');

exports.getComment = async (request, h) => {
    try {
        const get_comment = await comment.find();
        return {
            statuscode: 200,
            message: "Get all comments",
            data: get_comment
        };
    } catch (error) {
        throw error
    }
}