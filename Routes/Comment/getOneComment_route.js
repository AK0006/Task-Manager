const get_handler = require('../../Handler/Comment/getOneComment');
const { validate } = require('../../Schema/Profile');
const get_validate = require('../../Validation/Comment/getOneComment_Joi');

module.exports = {
    method: 'GET',
    path: '/comment/get/{id}',
    handler: get_handler.getOneComment,
    options: {
        validate: get_validate,
        auth: 'jwt',
        tags: ['api']
    }
}