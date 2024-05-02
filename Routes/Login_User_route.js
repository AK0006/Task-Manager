const { method } = require("./Profile_route/add_profile_route");
const login = require('../Handler/Login_User_handler');
const { validate } = require("../Schema/User");
const { options } = require("joi");
const validate_login = require('../Validation/Login_User.Joi');


module.exports = {
    method: 'POST',
    path: '/user/login',
    handler: login.login_User,
    options: {
        validate: validate_login,
        auth: false,
        tags: ['api']
    }
}