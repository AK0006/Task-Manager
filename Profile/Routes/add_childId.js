const addChildId_handler = require('../Handler/add_childId');
const addChildId_validation = require('../Validation/add_childId');

module.exports = {
    method: 'POST',
    path: '/profile/addChildId/{parentId}',
    handler: addChildId_handler,
    options: {
        validate: addChildId_validation,
        auth: false
    }
}