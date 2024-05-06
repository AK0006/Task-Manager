const updateComment_handler = require('../../Handler/Comment/updateComment');
const { validate } = require('../../Schema/Profile');
const updateComment_validate = require('../../Validation/Comment/updateComment_Joi');

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