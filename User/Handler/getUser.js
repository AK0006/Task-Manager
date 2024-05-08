const user = require('../Schema/User');

exports.getUser = async (request, h) => {
    try {
        const userGet = await user.find();
        return userGet;
    } catch (error) {
        return error;
    }
}