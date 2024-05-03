const addComment_handler = require('../../Handler/Comment/addComment');
const { validate } = require('../../Schema/Profile');
const addComment_validate = require('../../Validation/Comment/addComment_Joi');

module.exports ={
    method: 'POST',
    path: '/comment/add',
    handler: addComment_handler.addComment,
    options: {
        validate: addComment_validate,
        tags: ['api']
    }
}