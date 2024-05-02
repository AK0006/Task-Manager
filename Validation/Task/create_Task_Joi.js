const Joi = require('joi');
const { payload } = require('../Profile/add_profile_Joi');

module.exports ={
    payload: Joi.object({
        Title: Joi.string().max(100).required(),
        Description: Joi.string().max(100).required(),
        Status: Joi.string().max(100).required(),
        CreatedBy: Joi.string().max(20).optional(),
        CreatedBy_id: Joi.string().optional(),
        AssignedTo: Joi.array().items(Joi.string().required()),
        AssignedTo_id: Joi.string().optional(),
        startDate: Joi.date().iso().required(),
        endDate: Joi.date().iso().min(Joi.ref('startDate')).required()
    })
}