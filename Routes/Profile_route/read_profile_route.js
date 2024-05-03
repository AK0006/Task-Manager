const { options } = require('joi');
const read = require('../../Handler/Profile/read_profile_handler');


module.exports = {
    method: 'GET',
    path: '/profile/allProfiles',
    handler: read,
    options: {
        plugins: {'hapiAuthorization': {role: 'Admin'}},
        auth: 'jwt',
        tags: ['api']
    }
};