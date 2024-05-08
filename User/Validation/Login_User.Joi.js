const Joi = require('joi');
const { payload } = require('../../Profile/Validation/add_profile_Joi');

module.exports = {
    payload: Joi.object({
        Username: Joi.string().optional(),
        password: Joi.string().optional()
    })
}