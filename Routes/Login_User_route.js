const { method } = require("./Profile_route/add_profile_route");
const login = require('../Handler/Login_User_handler');
const { validate } = require("../Schema/User");
const { options } = require("joi");


module.exports = {
    method: 'POST',
    path: '/login',
    handler: login.login_User,
    options: {
        auth: false
    }
}