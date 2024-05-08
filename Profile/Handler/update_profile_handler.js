const { request } = require('http');
const User = require('../Schema/Profile');

exports.Update_user = (request, h) => {
    const id = request.params.id;
    const payload = request.payload;
    const userUpdate = User.findOneAndUpdate({_id: id}, payload);
    console.log(userUpdate);
    return userUpdate;
};