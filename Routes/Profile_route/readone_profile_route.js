const readOne = require('../../Handler/Profile/readone_profile_handler');

module.exports = {
    method: 'GET',
    path: '/profile/{id}',
    handler: readOne.getOne
};