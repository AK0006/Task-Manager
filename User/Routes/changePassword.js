const change_handler = require('../Handler/changePassword');
const change_validation = require('../Validation/ChangePassword');
const { method } = require('./Create_User.route');

module.exports = {
    method: 'PUT',
    path: '/user/changePassword',
    handler: change_handler.changePassword,
    options: {
        validate: change_validation,
        auth: 'jwt',
        tags: ['api']
    }
}