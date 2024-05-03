const getComment_handler = require('../../Handler/Comment/getComment');
const { validate } = require('../../Schema/Profile');

module.exports = {
    method: 'GET',
    path: '/comment/get',
    handler: getComment_handler.getComment,
    options: {
        auth: 'jwt',
        tags: ['api']
    }
}