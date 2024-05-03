const create = require('../../Handler/User/Create_User_handler')
const { validate } = require('../../Schema/User')
const user_validate = require('../../Validation/User/Create_User_Joi');
module.exports ={
    method: 'POST',
    path: '/user/create',
    handler: create.create_User,
    options: {
        validate: user_validate,
        auth: false,
        tags: ['api']
    }
}