const updateComment_handler = require('../Handler/updateComment');
const { validate } = require('../../Profile/Schema/Profile');
const updateComment_validate = require('../Validation/updateComment_Joi');

module.exports = {
    method: 'PUT',
    path: '/comment/update/{id}',
    handler: updateComment_handler.updateComment,
    options: {
        validate: updateComment_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        auth: false,
        tags: ['api']
    }
}