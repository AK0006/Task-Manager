const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        password: Joi.string().min(3).optional(),
        oldPassword: Joi.string().min(3).max(30).optional()
    })
}