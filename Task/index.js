'use strict'

const { version } = require("joi")

exports.plugin = {
    name: 'task',
    version: '1.0.0',
    register: (server, options) => {
        server.route(require('./Routes/createTask'));
        server.route(require('./Routes/deleteTask_route'));
        server.route(require('./Routes/getAllTask_route'));
        server.route(require('./Routes/getOneTask_route'));
        server.route(require('./Routes/updateTask_route'));
    }
}