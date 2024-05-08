const get_handler = require('../Handler/getOneComment');
const { validate } = require('../../Profile/Schema/Profile');
const get_validate = require('../Validation/getOneComment_Joi');

module.exports = {
    method: 'GET',
    path: '/comment/get/{id}',
    handler: get_handler.getOneComment,
    options: {
        validate: get_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        auth: 'jwt',
        tags: ['api']
    }
}