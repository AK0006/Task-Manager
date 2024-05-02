const Task = require('../../Schema/Task');
// const Profile = require('../../Schema/Profile');
const { ProfilingLevel } = require('mongodb');
const profile_al = require('../../Handler/Profile/read_profile_handler');
const Profile = require('../../Schema/Profile');

module.exports = async (request, h) => {
    // console.log(request.auth.credentials);
    try {

        const name = request.auth.credentials.user.Username;
        const created_id = request.auth.credentials.profile._id;


        const _id = request.payload.AssignedTo_id;
        const find = await Profile.findOne({_id}, request.payload.Profile_id);

        const data = Object.assign(request.payload, {CreatedBy: name, CreatedBy_id: created_id});
        const result = await Task.create(data);
        return result;
    } catch (error) {
        console.log(error);
        return "Unable to fetch data";
    }
}