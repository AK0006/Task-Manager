const { options } = require('joi');
const getAllTask_handler = require('../../Handler/Task/getAllTask');
const { method, handler } = require('../Login_User_route');

module.exports = {
    method: 'GET',
    path: '/task/all',
    handler: getAllTask_handler.getAllTask,
    options: {
        auth: false
    }
}