const Joi = require('joi');
const { payload } = require('../User/Login_User.Joi');

module.exports = {
    params: Joi.object({
        id: Joi.string().required(),
}),
payload: Joi.object({
    Title: Joi.string().max(100).required(),
    Description: Joi.string().max(100).required(),
    Status: Joi.string().max(100).required(),
    CreatedBy: Joi.string().max(20).optional(),
    CreatedBy_id: Joi.string().optional(),
    AssignedTo: Joi.string().optional(),
    AssignedTo_id: Joi.array().items(Joi.string().optional()),
    startDate: Joi.date().iso().optional(),
    endDate: Joi.date().iso().min(Joi.ref('startDate')).optional()
})
}