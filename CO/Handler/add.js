const coSchema = require('../Schema/CO');
const poSchema = require('../../PO/Schema/Po');

module.exports = async (request, h) => {
    try {
        // const poModel = await poSchema.findOne({_id: request.payload});
        // console.log(poModel);
        const addCo = await coSchema.create(request.payload);
        console.log(addCo);
        return addCo;
    } catch (error) {
        console.log(error);
        throw error
    }
}