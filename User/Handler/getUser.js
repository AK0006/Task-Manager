const user = require('../Schema/User');

exports.getUser = async (request, h) => {
    try {
        const userGet = await user.find();
        return {
            statuscode: 200,
            message: "get all users",
            data: userGet
        };
    } catch (error) {
        throw error;
    }
}