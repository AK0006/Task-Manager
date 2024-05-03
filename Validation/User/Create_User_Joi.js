const Joi = require('joi');
const { payload } = require('../Profile/add_profile_Joi');

module.exports = {
    payload: Joi.object({
        Username: Joi.string().min(1).max(10).optional(),
        role: Joi.array().items(Joi.string()),
        password: Joi.string().optional(),
        Profile_id: Joi.string().required()
    })
}