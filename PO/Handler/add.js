const { ReturnDocument } = require('mongodb');
const { login_User } = require('../../User/Handler/Login_User_handler');
const poSchema = require('../Schema/Po');

module.exports = async (request, h) => {
    try {
        const addPO = await poSchema.create(request.payload)
        console.log(addPO);
        return addPO
    } catch (error) {
        console.log(error);
        throw error
    }
}