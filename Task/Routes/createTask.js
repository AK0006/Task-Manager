'use strict';

const create_handler = require('../Handler/createTask');
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