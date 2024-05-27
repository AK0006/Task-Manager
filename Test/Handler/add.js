const test = require('../Schema/test');

module.exports = async(request, h) => {
    try {
        const payload = request.payload;
        const addTest = await test.create(payload);
        console.log(addTest);
        return addTest;
    } catch (error) {
        throw error
    }
}