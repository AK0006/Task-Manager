const { options } = require('joi');
const read = require('../Handler/read_profile_handler');


module.exports = {
    method: 'GET',
    path: '/profile/allProfiles',
    handler: read,
    options: {
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        auth: 'jwt',
        tags: ['api']
    }
};