const coSchema = require('../../CO/Schema/CO');
const averageSchema = require('../Schema/COAverage');
const poSchema = require('../../PO/Schema/Po');

module.exports = async (request, h) => {
    try {

        const coModel = await coSchema.find();

        let totalWeight = {};
        let count = {};
        coModel.forEach((co) => {
            co.CO.forEach((po) => {
                const key = po.Po_id.toString();
                if(!totalWeight[key]) {
                    totalWeight[key] = 0;
                    count[key] = 0;
                }
                totalWeight[key] += po.Weight;
                count[key]++;
            });
        });

        const average = {}
        Object.keys(totalWeight).forEach(poId => {
            average[poId] = totalWeight[poId] / count[poId]
        });
        console.log(average);
        const addaverage = await averageSchema.create({poAverage: average});
        // console.log(addaverage);
        return addaverage
    } catch (error) {
        console.log(error);
        throw error
    }
}