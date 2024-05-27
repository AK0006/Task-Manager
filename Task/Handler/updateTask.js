const Task = require('../Schema/Task');

exports.Update_task = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const updateTask = await Task.findOneAndUpdate({_id: id}, payload).lean();
        console.log(updateTask);
        return {
            statuscode: 200,
            message: "find and update",
            data: updateTask
        };
    } catch (error) {
        console.log(error);
        return error
    }
}