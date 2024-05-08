const addUser_Handler = require('../Handler/add_profile_handler');
const { validate } = require('../Schema/Profile');
const create = require('../Validation/add_profile_Joi')

module.exports = {
    method: 'POST',
    path: '/profile/create',
    options: {
        validate: create,
        auth: false,
        tags: ['api']
    },
    handler: addUser_Handler.create_user
};