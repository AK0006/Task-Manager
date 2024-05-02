const update_handler = require('../../Handler/Task/updateTask');
const { method, handler } = require('../Login_User_route');

module.exports = {
    method: 'PUT',
    path: '/task/update/{id}',
    handler: update_handler.Update_task,
    options: {
        auth: 'jwt',
        tags: ['api']
    }
}