const Joi = require('joi');
const { payload } = require('../../CO/Validation/add');

module.exports = {
    payload: Joi.object({
        poAverage: Joi.object().optional()
    })
}