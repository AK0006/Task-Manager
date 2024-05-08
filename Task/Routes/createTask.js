const { options } = require('joi');
const create_handler = require('../Handler/createTask');
const { create, validate } = require('../../Profile/Schema/Profile');
const { method, handler } = require('../../Profile/Routes/add_profile_route');
const taskCreate = require('../Validation/create_Task_Joi')

module.exports = {
    method: 'POST',
    path: '/task/create',
    options: {
        auth: 'jwt',
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        tags: ['api'],
        validate: taskCreate
    },
    handler: create_handler
}