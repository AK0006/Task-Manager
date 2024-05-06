const { options } = require('joi');
const create_handler = require('../../Handler/Task/createTask');
const { create, validate } = require('../../Schema/Profile');
const { method, handler } = require('../Profile_route/add_profile_route');
const taskCreate = require('../../Validation/Task/create_Task_Joi')

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