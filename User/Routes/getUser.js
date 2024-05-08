const handler_getUser = require('../Handler/getUser');
const { validate } = require('../Schema/User');

module.exports = {
    method: 'GET',
    path: '/user/get',
    handler: handler_getUser.getUser,
    options: {
        tags: ['api'],
        plugins: {'hapiAuthorization': {roles: ['Admin']}}
    }
}