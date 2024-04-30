const Task = require('../../Schema/Task');
const Profile = require('../../Schema/Profile');
const { ProfilingLevel } = require('mongodb');


exports.create_task = async (request, h) => {
    try {
        const ProfileModel = await Profile.findOne({
            _id: request.payload.Profile_id
        });
        console.log(ProfileModel);

        const name =  validate.user;
        console.log(name);

        const data = request.payload;
        const result = await Task.create(data);
        return result;
    } catch (error) {
        return "Unable to fetch data";
    }
}