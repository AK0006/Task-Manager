const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        Username: Joi.string().min(3).max(20).required(),
        role: Joi.array().items(Joi.string()).optional()
    })
}