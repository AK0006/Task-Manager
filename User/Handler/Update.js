const user = require('../Schema/User');

exports.updateUser = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload
        const user_Update = await user.findOneAndUpdate({_id: id}, payload);
        return user_Update
    } catch (error) {
        console.log(error);
        return error;
    }
}