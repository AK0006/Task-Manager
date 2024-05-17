const comment = require('../Schema/Comment');
const server =  require('../../server');

module.exports = {
    name: "get_by_id",
    method: async(task_id) => {
        try {
            const commentById = await comment.find({Task_id: task_id}).lean();
            return commentById;
        } catch (error) {
            throw error;
        }
    }
};
