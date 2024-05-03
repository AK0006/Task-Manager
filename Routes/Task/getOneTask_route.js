const getOneTask_hanlder = require('../../Handler/Task/getOneTask');
const getOneTask_validate = require('../../Validation/Task/getOne_Task_Joi');
const { method } = require('./createTask');

module.exports = {
    method: 'GET',
    path: '/task/{id}',
    handler: getOneTask_hanlder.getOne_task,
    options: {
        validate: getOneTask_validate,
        auth: 'jwt',
        tags: ['api']
    }
}