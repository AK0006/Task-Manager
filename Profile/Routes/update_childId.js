const updateChildId_handler = require('../Handler/update_childId');
const updateChildId_validation = require('../Validation/update_childId');

module.exports = {
    method: 'PUT',
    path: '/profile/parentID/{parentId}',
    handler: updateChildId_handler,
    options: {
        validate: updateChildId_validation,
        auth: false
    }
}