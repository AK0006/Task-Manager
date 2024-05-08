const task = require('../Schema/Task');

exports.delete_task = async (request, h) => {
    const id = request.params.id;
    const payload = request.payload;
    const remove_task = await task.findOneAndDelete({_id: id}, payload);
    console.log(remove_task);
    return remove_task;
}