const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        Po: Joi.array().items(Joi.object())
    })
}