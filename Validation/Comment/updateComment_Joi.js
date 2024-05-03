const Joi = require('joi');
const { payload } = require('./addComment_Joi');
const { params } = require('../Profile/delete_profile.joi');

module.exports ={
    params: Joi.object({
        id: Joi.string().required()
    }),
    payload: Joi.object({
        Comment: Joi.string().min(10).max(500).required(),
        Sender_id: Joi.string().optional(),
        Receiver_id: Joi.string().optional(),
        Task_id: Joi.string().optional()
    })
}