const { options } = require('joi');
const read = require('../../Handler/Profile/read_profile_handler');


module.exports = {
    method: 'GET',
    path: '/profile',
    handler: read.get_all,
    options: {
        auth: 'jwt'
    }
};