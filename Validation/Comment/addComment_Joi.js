const Joi = require('joi');

module.exports ={
    payload: Joi.object({
        Comment: Joi.string().min(10).max(500).required(),
        Sender_id: Joi.string().optional(),
        Receiver_id: Joi.string().required(),
        Task_id: Joi.string().required()
    })
}