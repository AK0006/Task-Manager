const User = require('../Schema/User');
const Bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');

exports.changePassword = async (request, h) => {
    const { password, oldPassword } = request.payload;
    try {
        const user = await User.findOne({_id: request.auth.credentials.user._id});
        const matchPassword = await Bcrypt.compare(oldPassword, user.password);
        if(!matchPassword){
            return Boom.badRequest("Invalid Password");
        }
        const salt = await Bcrypt.genSalt(10);
        const hash = await Bcrypt.hash(password, salt);
        console.log(hash);
        const data = Object.assign(request.payload, {password: hash})
        const update_password = await User.findOneAndUpdate({_id: user._id}, data);
        console.log(update_password);
        return update_password;
    } catch (error) {
        console.log(error);
        throw error
    }
}