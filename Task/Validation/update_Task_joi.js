const Joi = require('joi');
const { payload } = require('../../User/Validation/Login_User.Joi');

module.exports = {
    params: Joi.object({
        id: Joi.string().required()
}),
payload: Joi.object({
    Title: Joi.string().max(100).optional(),
    Description: Joi.string().max(100).optional(),
    Status: Joi.string().max(100).optional(),
    CreatedBy: Joi.string().max(20).optional(),
    CreatedBy_id: Joi.string().optional(),
    AssignedTo: Joi.string().optional(),
    AssignedTo_id: Joi.array().items(Joi.string().optional()),
    startDate: Joi.date().iso().optional(),
    endDate: Joi.date().iso().min(Joi.ref('startDate')).optional()
})
}