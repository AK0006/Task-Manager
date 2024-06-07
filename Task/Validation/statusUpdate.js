const Joi = require('joi');
const { params } = require('./update_Task_joi');
const { payload } = require('./create_Task_Joi');

module.exports = {
    params: Joi.object({
        id: Joi.string().required()
    }),
    payload: Joi.object({
        Status: Joi.string().required()
    })
}