const getComment_handler = require('../Handler/getComment');
const { validate } = require('../../Profile/Schema/Profile');

module.exports = {
    method: 'GET',
    path: '/comment/get',
    handler: getComment_handler.getComment,
    options: {
        auth: 'jwt',
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        tags: ['api']
    }
}