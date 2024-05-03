const Joi = require('joi');
const { payload } = require('../Profile/add_profile_Joi');

module.exports = {
    payload: Joi.object({
        Username: Joi.string().optional(),
        password: Joi.string().optional()
    })
}