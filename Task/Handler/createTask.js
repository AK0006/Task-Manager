const Task = require('../Schema/Task');

module.exports = async (request, h) => {
    // console.log(request.auth.credentials);
    try {
        const name = request.auth.credentials.user.Username;
        const created_id = request.auth.credentials.profile._id;

        const data = Object.assign(request.payload, {CreatedBy: name, CreatedBy_id: created_id});
        const result = await Task.create(data);
        return {
            statuscode: 201,
            message: "create task",
            data: result
        };
    } catch (error) {
        throw error;
    }
}