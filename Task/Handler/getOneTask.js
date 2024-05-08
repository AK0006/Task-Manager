const task = require('../Schema/Task');
const comment = require('../../Comment/Schema/Comment')

exports.getOne_task = async (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const getTask_One = await task.findOne({_id: id}, payload);
        console.log(getTask_One.id);
        return getTask_One;
    } catch (error) {
        console.log(error);
        return error;
    }
}