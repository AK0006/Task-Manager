const User = require('../Schema/Profile');

exports.delete_user = async (request, h) => {
    try {
        const id = request.params.id;
        const deleteUser = await User.findOneAndDelete({_id: id});
        return {
            statuscode: 200,
            message: "findById and delete",
            data: deleteUser
        };
    } catch (error) {
        throw error;
    }
}