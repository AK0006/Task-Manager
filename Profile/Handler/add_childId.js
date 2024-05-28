const profileSchema = require('../Schema/Profile');
const testSchema = require('../../Test/Schema/test');
const { Long } = require('bson');
const { object } = require('joi');

module.exports = async (request, h) => {
    try {
        const id = request.params.parentId;
        const childId = request.payload.test[0];

        // find the parent ID
        const profile = await profileSchema.findOne({_id: id}).lean();

        // Create a object in the testSchema
        const test = await testSchema.create(childId);

        //Add the created testSchema in the profile
        // profile.test.splice(profile.test.length, 0, test);
        profile.test.push(test);
        console.log(profile.test);

        // Save it in the DB
        const update_profile = await profileSchema.findOneAndUpdate({_id: profile._id}, profile, {returnOriginal: false});
        // console.log(update_profile);

        return profile;
    } catch (error) {
        throw error
    }
}