const user = require('../Schema/User');

exports.getUser = async (request, h) => {
    // console.log(request.auth.credentials);
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