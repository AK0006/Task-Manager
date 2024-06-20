const profileSchema = require('../Schema/Profile');
const testSchema = require('../../Test/Schema/test');

module.exports = async (request, h) => {
    try {
        const id = request.params.parentId;
        const childId = request.payload.test[0];
        console.log(childId);

        const testUpdate = await testSchema.create(childId);
        console.log(testUpdate);

        const updateProfile = await profileSchema.findOneAndUpdate({_id: id}, {$addToSet: {test: testUpdate}}, {returnOriginal: false});
        console.log(updateProfile);

        return updateProfile;
    } catch (error) {
        console.log(error);
        throw error
    }
}