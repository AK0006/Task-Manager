const Task = require('../Schema/Task');
// const Profile = require('../../Schema/Profile');
const { ProfilingLevel } = require('mongodb');
const profile_al = require('../../Profile/Handler/read_profile_handler');
const Profile = require('../../Profile/Schema/Profile');

module.exports = async (request, h) => {
    // console.log(request.auth.credentials);
    try {

        const name = request.auth.credentials.user.Username;
        const created_id = request.auth.credentials.profile._id;

        const data = Object.assign(request.payload, {CreatedBy: name, CreatedBy_id: created_id});
        const result = await Task.create(data);
        return result;
    } catch (error) {
        console.log(error);
        return "Unable to fetch data";
    }
}