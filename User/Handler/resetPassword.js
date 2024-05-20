const User = require('../Schema/User');
const Bcrypt = require('bcrypt');
const profile = require('../../Profile/Schema/Profile');
const Boom = require('boom');

exports.reset_password = async (request, h) => {
    try {
        let password = request.payload.password;
        if(!password){
            password = Math.random().toString(36).substring(2, 15);
            console.log(password);
        }

        const salt = await Bcrypt.genSalt(10);
        const hash = await Bcrypt.hash(password.toString(), salt);
        console.log(hash);
        const id = request.params.id;
        const passworddata = Object.assign(request.payload, {password: hash});
        const reserPassword = await User.findOneAndUpdate({_id: id}, passworddata);
        console.log(reserPassword);
        return {
            statuscode: 200,
            message: "password reset",
            data: reserPassword
        }
    } catch (error) {
        throw error
    }
}