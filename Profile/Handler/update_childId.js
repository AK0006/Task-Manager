const ProfileSchema = require('../Schema/Profile');
const testSchema = require('../../Test/Schema/test');
const { ProfilingLevel } = require('mongodb');
const { internal } = require('boom');

module.exports = async(request, h) => {
    try {
        const id = request.params.parentId;
        const childId = request.payload.test[0];
        // console.log(childId);

        const profile = await ProfileSchema.findOne({_id: id}).lean();

        profile.test.forEach((item, index) => {
            if(item._id === childId._id){
                console.log(item);
                item.firstName = childId.firstName;
                item.lastName = childId.lastName;
            }
        });
        console.log(profile.test);

        const update_childId = await testSchema.findOneAndUpdate({_id: childId._id}, {firstName: childId.firstName}, {returnOriginal: false});
        // console.log(update_childId);

        const profile_update = await ProfileSchema.findOneAndUpdate({_id: profile._id}, profile, {returnOriginal: false});
        // console.log(profile_update);
        
        return profile;
    } catch (error) {
        console.log(error);
        throw error
    }
}




        // profile.test.forEach((item, index) => {
        //     if(item._id === childId._id){
        //         profile.test.splice(index, 1, update_childId)
        //     }
        // });

        // console.log(profile);