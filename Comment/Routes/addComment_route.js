const addComment_handler = require('../Handler/addComment');
const { validate } = require('../../Profile/Schema/Profile');
const addComment_validate = require('../Validation/addComment_Joi');

module.exports ={
    method: 'POST',
    path: '/comment/add',
    handler: addComment_handler.addComment,
    options: {
        validate: addComment_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        tags: ['api']
    }
}