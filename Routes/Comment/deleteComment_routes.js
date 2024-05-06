const deleteComment_handler = require('../../Handler/Comment/deleteComment');
const deleteComment_validate = require('../../Validation/Comment/deleteComment_Joi');

module.exports = {
    method: 'DELETE',
    path: '/comment/delete/{id}',
    handler: deleteComment_handler.delteComment,
    options: {
        validate: deleteComment_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        auth: 'jwt',
        tags: ['api']
    }

}