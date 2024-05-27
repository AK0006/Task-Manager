"use strict";

const { version } = require("joi");

exports.plugin = {
    name: 'test',
    version: '1.0.0',
    register: (server, options) => {
        server.route(require('./Routes/add'));
    }
}