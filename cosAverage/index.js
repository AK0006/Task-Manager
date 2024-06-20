'use strict';

exports.plugin = {
    name: 'coAverage',
    version: '1.0.0',
    register: (server, options) => {
        server.route(require('./Routes/create'));
    }
}