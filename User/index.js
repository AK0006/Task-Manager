'use strict'
const { version } = require("joi")

exports.plugin = {
    name: "user",
    version: "1.0.0",
    register: (server, options) => {
        server.route(require('./Routes/Create_User.route'));
        server.route(require('./Routes/Login_User_route'));
        server.route(require('./Routes/delete'));
        server.route(require('./Routes/getUser'));
        server.route(require('./Routes/update'));
        server.route(require('./Routes/reserPassword'));
        server.route(require('./Routes/changePassword'));
    }
}