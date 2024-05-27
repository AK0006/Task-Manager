const { options } = require('joi');
const addTest_handler = require('../Handler/add');
const addTest_validation = require('../Validation/add');

module.exports = {
    method: 'POST',
    path: '/test/add',
    handler: addTest_handler,
    options: {
        validate: addTest_validation,
        auth: false,
        tags: ['api']
    }
}