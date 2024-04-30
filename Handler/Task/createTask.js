const Task = require('../../Schema/Task');
const Profile = require('../../Schema/Profile');
const { ProfilingLevel } = require('mongodb');


exports.create_task = async (request, h) => {
    // console.log(request.auth.credentials);
    try {
        const ProfileModel = request.auth.credentials;
        console.log(ProfileModel);

        const name =  request.auth.credentials.user.Username;

        const data = Object.assign(request.payload, {CreatedBy: name});
        const result = await Task.create(data);
        return result;
    } catch (error) {
        return "Unable to fetch data";
    }
}