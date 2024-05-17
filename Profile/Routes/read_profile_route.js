const { options } = require('joi');
const get = require('../Handler/read_profile_handler');


module.exports = {
    method: 'GET',
    path: '/profile/allProfiles',
    handler: get.get_all,
    options: {
        plugins: {'hapiAuthorization': {roles: ['Admin']}},
        auth: 'jwt',
        tags: ['api']
    }
};