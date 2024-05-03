const task = require('../../Schema/Task');

exports.getOne_task = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const getTask_One = await task.findOne({_id: id}, payload);
        return getTask_One;
    } catch (error) {
        return error;
    }
}