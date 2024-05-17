const profile = require('../Schema/Profile');

exports.getOne = (request, h) => {
    try {
        const id = request.params._id;
        const get_One = profile.findOne({id});
        
        return {
            statuscode: 200,
            message: "get by id",
            data: get_One
        };
    } catch (error) {
        throw error;
    }
}