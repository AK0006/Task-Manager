const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
    })
}
