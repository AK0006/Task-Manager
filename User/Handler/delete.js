const user = require('../Schema/User');

exports.user_delete = async (request, h) => {
    try {
        const id = request.params.id;
        const deletion = await user.findOneAndDelete({_id: id})
        return {
            statuscode: 200,
            message: "find and delete",
        };
    } catch (error) {
        throw error
    }
}