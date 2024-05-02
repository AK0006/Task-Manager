const Joi = require('joi');
const { payload } = require('./Profile/add_profile_Joi');

module.exports = {
    payload: Joi.object({
        Username: Joi.string().min(1).max(10).required(),
        Role: Joi.string().required(),
        Password: Joi.string().required(),
        Profile_id: Joi.string().required()
    })
}