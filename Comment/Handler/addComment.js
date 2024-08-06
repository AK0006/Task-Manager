const comment = require('../Schema/Comment');

exports.addComment = async (request, h) => {
    console.log(request.auth.credentials);
    try {
        const send_id = request.auth.credentials.profile._id;
        const comment_data = Object.assign({}, request.payload, {Sender_id: send_id});
        const add_comment = await comment.create(comment_data);
        return {
            statuscode: 200,
            message: "comment created",
            data: add_comment
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}