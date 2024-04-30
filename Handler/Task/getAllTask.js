const { assert } = require('joi');
const Task = require('../../Schema/Task');
const { getOne } = require('../Profile/readone_profile_handler');

exports.getAllTask = (request, h) => {
    try {
        const get_task = Task.find();
        return get_task;
    } catch (error) {
        return error
    }
}