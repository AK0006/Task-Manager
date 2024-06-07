const statusUpdate_handler = require('../Handler/statusUpdate');
const { validate } = require('../Schema/Task');
const statusUpdate_validation = require('../Validation/statusUpdate');

module.exports = {
    method: 'PATCH',
    path: '/task/statusUpdate/{id}',
    handler: statusUpdate_handler,
    options: {
        validate: statusUpdate_validation,
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        auth: 'jwt',
        tags: ['api']
    }
}