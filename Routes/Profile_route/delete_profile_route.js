const { handler } = require("./add_profile_route");
const user_delete = require('../../Handler/Profile/delete_profile_handler');
const { options } = require("joi");

module.exports = {
    method: 'DELETE',
    path: '/profile/{id}',
    handler: user_delete.delete_user,
    options: {
        auth: 'jwt',
        tags: ['api']
    }
};