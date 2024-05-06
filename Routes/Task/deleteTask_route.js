const { options } = require('joi');
const removeTask_handler = require('../../Handler/Task/deleteTask');
const removeTask_validate = require('../../Validation/Task/deleteTask_joi');
const { method } = require('../User/Login_User_route');
const { validate } = require('../../Schema/Profile');

module.exports = {
    method: 'DELETE',
    path: '/task/delete/{id}',
    options: {
        validate: removeTask_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        auth: 'jwt',
        tags: ['api']
    },
    handler: removeTask_handler.delete_task
}