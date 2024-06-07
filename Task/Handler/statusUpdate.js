const taskSchema = require('../Schema/Task');

module.exports = async (request, h) => {
    try {
        const id = request.params.id
        const statusUpdate = await taskSchema.findOneAndUpdate({_id: id}, request.payload);
        return statusUpdate;
    } catch (error) {
        throw error
    }
}