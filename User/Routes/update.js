const handler_update = require('../Handler/Update');
const validate_update = require('../Validation/Update_valid');

module.exports = {
    method: 'PUT',
    path: '/user/update/{id}',
    handler: handler_update.updateUser,
    options: {
        validate: validate_update,
        tags: ['api'],
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}}
    }
}