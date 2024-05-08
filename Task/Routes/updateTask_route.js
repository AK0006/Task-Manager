const update_handler = require('../Handler/updateTask');
const { method, handler } = require('../../User/Routes/Login_User_route');
const update_validate = require('../Validation/update_Task_joi');

module.exports = {
    method: 'PUT',
    path: '/task/update/{id}',
    handler: update_handler.Update_task,
    options: {
        validate: update_validate,
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        auth: 'jwt',
        tags: ['api']
    }
}