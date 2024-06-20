const addCo_handler = require('../Handler/add');
const { validate } = require('../Schema/CO');
const addCo_validation = require('../Validation/add');

module.exports = {
    method: 'POST',
    path: '/co/add',
    handler: addCo_handler,
    options: {
        validate: addCo_validation,
        auth: false,
        tags: ['api']
    }
}