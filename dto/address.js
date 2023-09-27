const joi = require('joi')

module.exports.addressCreate = joi.object({
    street: joi.string().required(),
    city: joi.string().required(),
    country:joi.string().required(),
    user_id: joi.string().required()
}).required()


module.exports.addressUpdate= joi.object({
    id: joi.number().required(),
    street: joi.string().optional(),
    city: joi.string().optional(),
    country:joi.string().optional(),
    user_id: joi.string().optional()
}).required()