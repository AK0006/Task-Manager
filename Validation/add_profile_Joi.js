const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        firstname: Joi.string().min(3).max(10).required(),
        lastname: Joi.string().min(1).max(20).required(),
        Age: Joi.number().required(),
        Mobilenumber: Joi.number().min(10).required(),
        Email: Joi.string(). email(). lowercase().required(),
        Password: Joi.string().min(6).required(),
        Createdat: Joi.date().required()
    })
};