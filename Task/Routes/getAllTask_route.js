const { options } = require('joi');
const getAllTask_handler = require('../Handler/getAllTask');
const { method, handler } = require('../../User/Routes/Login_User_route');

module.exports = {
    method: 'GET',
    path: '/task/all',
    handler: getAllTask_handler.getAllTask,
    options: {
        auth: 'jwt',
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        tags: ['api']
    }
}