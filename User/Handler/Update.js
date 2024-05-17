const user = require('../Schema/User');

exports.updateUser = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload
        const user_Update = await user.findOneAndUpdate({_id: id}, payload);
        return {
            statuscode: 200,
            message: "find and update",
            data: user_Update
        };
    } catch (error) {
        throw error;
    }
}