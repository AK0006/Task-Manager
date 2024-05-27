const { request } = require('http');
const User = require('../Schema/Profile');

exports.Update_user = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const userUpdate = await User.findOneAndUpdate({_id: id}, payload, {returnOriginal: false});
        return {
            statuscode: 200,
            message: "find and update",
            data: userUpdate
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};