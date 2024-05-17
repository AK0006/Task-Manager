const Task = require('../Schema/Task');

exports.Update_task = (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const updateTask = Task.findOneAndUpdate({_id: id}, payload);
        return {
            statuscode: 200,
            message: "find and update",
            data: updateTask
        };
    } catch (error) {
        return error
    }
}