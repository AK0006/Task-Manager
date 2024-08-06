const { assert } = require('joi');
const Task = require('../Schema/Task');
const { getOne } = require('../../Profile/Handler/readone_profile_handler');

exports.getAllTask = async (request, h) => {
    console.log(request.auth.credentials.valid);
    try {
        const get_task = await Task.find();
        return {
            statuscode: 200,
            message: "get all task",
            data: get_task
        };
    } catch (error) {
        throw error
    }
}