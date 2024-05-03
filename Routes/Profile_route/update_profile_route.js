const { validate } = require('../../Schema/Profile');
const User_update = require('../../Handler/Profile/update_profile_handler');
const vald_user = require('../../Validation/Profile/update_profile_Joi');

module.exports = {
    method: 'PUT',
    path: '/profile/update/{id}',
    options: {
        validate: vald_user,
        auth: 'jwt',
        tags: ['api']
    },
    handler: User_update.Update_user
}