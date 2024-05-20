const Joi = require('joi');
const { payload } = require('./Create_User_Joi');

module.exports = {
    payload: Joi.object({
        Username: Joi.string().optional(),
        password: Joi.string().optional()
    })
}