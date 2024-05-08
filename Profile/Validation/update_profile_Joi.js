const Joi = require('joi');
const { payload } = require('./add_profile_Joi');

module.exports = ({
    payload: Joi.object({

        id: Joi.string().required(),
        firstname: Joi.string().min(3).max(10).required(),
        lastname: Joi.string().min(3).max(10).required(),
        Age: Joi.number().required(),
        Mobilenumber: Joi.number().min(10).required(),
        Email: Joi.string(). email(). lowercase().required(),
        Password: Joi.string().min(6).required(),
    })
})