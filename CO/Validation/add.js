const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        name: Joi.string().required(),
        CO: Joi.array().items(Joi.object()),
    })
}