const User = require('../Schema/Profile');

exports.delete_user = async (request, h) => {
    try {
        const id = request.params.id;
        const deleteUser = await User.findOneAndDelete({_id: id});
        return deleteUser;
    } catch (error) {
        return "Unable to find the params"
    }
}