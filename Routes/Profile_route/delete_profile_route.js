const { handler } = require("./add_profile_route");
const user_delete = require('../../Handler/Profile/delete_profile_handler');
const { options } = require("joi");
const delete_validate = require('../../Validation/Profile/delete_profile.joi');
const { validate } = require("../../Schema/Profile");

module.exports = {
    method: 'DELETE',
    path: '/profile/delete/{id}',
    handler: user_delete.delete_user,
    options: {
        validate: delete_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        auth: 'jwt',
        tags: ['api']
    }
};