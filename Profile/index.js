'use strict'

const { version } = require("joi")

exports.plugin = {
    name: 'profile',
    version: '1.0.0',
    register: (server, options) => {
        server.route(require('./Routes/add_profile_route'));
        server.route(require('./Routes/delete_profile_route'));
        server.route(require('./Routes/read_profile_route'));
        server.route(require('./Routes/readone_profile_route'));
        server.route(require('./Routes/update_profile_route'));
        server.route(require('./Routes/update_childId'));
    }
}