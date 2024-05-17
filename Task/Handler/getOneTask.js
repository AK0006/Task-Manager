"use strict";

const Task = require('../Schema/Task');
const comment = require('../../Comment/Schema/Comment');
const server = require('../../server');


exports.getOne_task = async (request, h) => {
    try {
        const id = request.params.id;
        const get_comment = await request.server.methods.get_by_id(id);
        console.log(get_comment);
        const filter_comment = get_comment.map(item => item.Comment)
        console.log(filter_comment);
        
        const payload = request.payload;
        const getTask_One = await Task.findOne({_id: id}, payload);
        console.log(getTask_One);
        return getTask_One;
    } catch (error) {
        console.log(error);
        return error;
    }
}