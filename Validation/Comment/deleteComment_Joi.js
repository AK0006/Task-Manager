const Joi = require('joi');
const { params } = require('./updateComment_Joi');

module.exports = {
    params: Joi.object({
        id: Joi.string().required()
    })
}