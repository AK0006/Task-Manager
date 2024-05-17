const comment = require('../Schema/Comment');
const server =  require('../../server');

// const findBy_id = async(findBy_id) => {
//     return await comment.findOne({_id: findBy_id});
// }

// module.exports = server.method('findBy_id', findBy_id);

module.exports = {
    name: "get_by_id",
    method: async(task_id) => {
        try {
            const task = await comment.find({Task_id: task_id}).lean();
            // console.log(task);
            return task;
        } catch (error) {
            return error;
        }
    }
}
