const Task = require('../../Schema/Task');
const Profile = require('../../Schema/Profile');
const { ProfilingLevel } = require('mongodb');


exports.create_task = async (request, h) => {
    // console.log(request.auth.credentials);
    try {
        // const profile = request.auth.credentials.profile._id;
        // console.log(profile);
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