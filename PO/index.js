'use strict';

exports.plugin = {
    name: 'PO',
    version: '1.0.0',
    register: (server, options) => {
        server.route(require('./Routes/add'));
    }
}