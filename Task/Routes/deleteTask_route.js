const { options } = require('joi');
const removeTask_handler = require('../Handler/deleteTask');
const removeTask_validate = require('../Validation/deleteTask_joi');
const { method } = require('../../User/Routes/Login_User_route');
const { validate } = require('../../Profile/Schema/Profile');

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