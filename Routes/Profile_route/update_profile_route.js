const { validate } = require('../../Schema/Profile');
const User_update = require('../../Handler/Profile/update_profile_handler');
const vald_user = require('../../Validation/update_profile_Joi');

module.exports = {
    method: 'PUT',
    path: '/profile/{id}',
    options: {
        validate: vald_user
    },
    handler: User_update.Update_user
}