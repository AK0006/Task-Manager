const comment = require('../Schema/Comment');

const findId = async (id) => {
    return await comment.findById({id})
}

server.method('findId', findId);