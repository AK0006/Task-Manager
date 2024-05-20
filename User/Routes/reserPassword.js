const { AggregateGroupByReducers } = require('redis');
const reset_handler = require('../Handler/resetPassword');
const reset_validation = require('../Validation/resetPassword');

module.exports = ({
    method: 'PUT',
    path: '/user/resetPassword/{id}',
    handler: reset_handler.reset_password,
    options: {
        validate: reset_validation,
        tags: ['api'],
        auth: false
    }
});