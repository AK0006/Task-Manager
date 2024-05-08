const handler_delete = require('../Handler/delete');
const validate_delete = require('../Validation/delete_valid');
const { method } = require('./Login_User_route');

module.exports = {
    method: 'DELETE',
    path: '/user/delete/{id}',
    handler: handler_delete.user_delete,
    options: {
        validate: validate_delete,
        tags: ['api'],
        plugins: {'hapiAuthorization': {roles: ['Admin']}}
    }
}