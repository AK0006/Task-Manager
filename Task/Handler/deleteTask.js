const task = require('../Schema/Task');

exports.delete_task = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const remove_task = await task.findOneAndDelete({_id: id}, payload);
        return {
            statuscode: 200,
            message: "find and delete",
            data: remove_task
        };
    } catch (error) {
        throw error;
    }
}