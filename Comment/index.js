'use strict'

const { version } = require("joi")

exports.plugin = {
    name: 'comment',
    version: '1.0.0',
    register: (server, options) => {
        server.route(require('./Routes/addComment_route'));
        server.route(require('./Routes/deleteComment_routes'));
        server.route(require('./Routes/getComment_route'));
        server.route(require('./Routes/getOneComment_route'));
        server.route(require('./Routes/updateComment_route'));
    }
};