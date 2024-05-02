const { assert } = require('joi');
const Task = require('../../Schema/Task');
const { getOne } = require('../Profile/readone_profile_handler');

exports.getAllTask = async (request, h) => {
    try {
        const get_task = await Task.find();
        return get_task;
    } catch (error) {
        return error
    }
}