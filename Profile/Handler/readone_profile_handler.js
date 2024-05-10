const User = require('../Schema/Profile');

exports.getOne = (request, h) => {
    try {
        const id = request.params._id;
        const get_One = User.findOne({id});
        
        return get_One;
    } catch (error) {
        return error
    }
}