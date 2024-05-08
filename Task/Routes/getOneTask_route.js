const getOneTask_hanlder = require('../Handler/getOneTask');
const getOneTask_validate = require('../Validation/getOne_Task_Joi');
const { method } = require('./createTask');

module.exports = {
    method: 'GET',
    path: '/task/{id}',
    handler: getOneTask_hanlder.getOne_task,
    options: {
        validate: getOneTask_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        auth: 'jwt',
        tags: ['api']
    }
}