const profileSchema = require('../Schema/Profile');
const test = require('../../Test/Schema/test');

module.exports = async (request, h) => {
    try {
        const getAll = await profileSchema.find({});
        // console.log(getAll);
        return getAll;
    } catch (error) {
        throw error
    }
}