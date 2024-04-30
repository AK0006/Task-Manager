const Joi = require('joi');
const { payload } = require('../add_profile_Joi');

module.exports ={
    payload: Joi.object({
        Title: Joi.string().max(100).required(),
        Description: Joi.string().max(100).required(),
        Status: Joi.string().max(100).required(),
        CreatedBy: Joi.string().max(20).optional(),
        AssignedTo: Joi.string().max(20).required(),
        startDate: Joi.date().timestamp(),
        endDate: Joi.string().required(),
        Profile_id: Joi.string().required()
    })
}