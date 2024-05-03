const { options } = require('joi');
const getAllTask_handler = require('../../Handler/Task/getAllTask');
const { method, handler } = require('../User/Login_User_route');

module.exports = {
    method: 'GET',
    path: '/task/all',
    handler: getAllTask_handler.getAllTask,
    options: {
        auth: 'jwt',
        tags: ['api']
    }
}