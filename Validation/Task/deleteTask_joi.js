const Joi = require('joi');
const { params } = require('./update_Task_joi');

module.exports = {
    params: Joi.object({
        id: Joi.string().required()
    })
}