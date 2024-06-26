const { validate } = require('../Schema/Profile');
const User_update = require('../Handler/update_profile_handler');
const vald_user = require('../Validation/update_profile_Joi');

module.exports = {
    method: 'PUT',
    path: '/profile/update/{id}',
    options: {
        validate: vald_user,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        auth: 'jwt',
        tags: ['api']
    },
    handler: User_update.Update_user
}