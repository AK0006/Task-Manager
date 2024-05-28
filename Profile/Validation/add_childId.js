const Joi = require('joi');
const { payload } = require('./add_profile_Joi');

module.exports = {
    payload: Joi.object({
        firstname: Joi.string().min(3).max(10).optional(),
        lastname: Joi.string().min(3).max(10).optional(),
        Age: Joi.number().optional(),
        Mobilenumber: Joi.number().min(10).optional(),
        Email: Joi.string(). email(). lowercase().optional(),
        Password: Joi.string().min(6).optional(),
        test: Joi.array().items(Joi.object())
    })
}