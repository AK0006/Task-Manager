const addPo_handler = require('../Handler/add');
const addPo_validation = require('../Validation/add');

module.exports = {
    method: 'POST',
    path: '/po/add',
    handler: addPo_handler,
    options: {
        validate: addPo_validation,
        auth: false,
        tags: ['api']
    }
}