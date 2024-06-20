const coAverage_handler = require('../Handler/create');
const coAverage_Validation = require('../Validation/create');

module.exports = {
    method: 'POST',
    path: '/coAverage/add',
    handler: coAverage_handler,
    options: {
        validate: coAverage_Validation,
        auth: false,
        tags: ['api']
    }
}