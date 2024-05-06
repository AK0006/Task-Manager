const readOne = require('../../Handler/Profile/readone_profile_handler');
const { validate } = require('../../Schema/Profile');
const readValidation = require('../../Validation/Profile/getOne_profile');

module.exports = {
    method: 'GET',
    path: '/profile/{id}',
    handler: readOne.getOne,
    options: {
        validate: readValidation,
        plugins: {'hapiAuthorization': {roles: ['Admin', 'User']}},
        auth: 'jwt',
        tags: ['api']
    }
};