const ProfileSchema = require('../Schema/Profile');
const testSchema = require('../../Test/Schema/test');

module.exports = async(request, h) => {
    console.log(request);
    try {
        const id = request.params.parentId;
        const testdata = request.payload.test;
        console.log(testdata);
        const childId = request.params.childId;
        console.log(childId);

        // Update the testSchema
        const update_childId = await testSchema.findOneAndUpdate({_id: childId}, {firstName: testdata.firstName, lastName: testdata.lastName}, {returnOriginal: false});
        // console.log(update_childId);
    
        // Update the profileSchema using testSchema value
        const profile_update = await ProfileSchema.findOneAndUpdate(
            {_id: id},
            {"test.$[testEle]": update_childId},
            {
                arrayFilters: [{ "testEle._id": update_childId._id }],
                returnOriginal: false
            }
        );
        console.log(profile_update);


        // console.log(profile_update.test._id);
        // console.log(profile_update);
        
        return profile_update;
    } catch (error) {
        console.log(error);
        throw error
    }
}
