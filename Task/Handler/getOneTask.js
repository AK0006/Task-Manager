"use strict";

const Task = require('../Schema/Task');
const Boom = require('boom');

exports.getOne_task = async (request, h) => {
    try {
        const id = request.params.id;
        const get_comments = await request.server.methods.get_by_id(id);        
        const getTask_One = await Task.findOne({_id: id}, request.payload).lean();
        const result = Object.assign({}, get_comments, getTask_One);
        return {
            statusCode: 200,
            message: "task and comment for the task",
            data: result
        };
    } catch (error) {
        return Boom.badRequest(error);
    }
}