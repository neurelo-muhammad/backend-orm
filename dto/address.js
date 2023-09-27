const joi = require('joi')

module.exports.addressCreate = {
    street: joi.string().required(),
    city: joi.string().required(),
    country:joi.string().required(),
    user_id: joi.string().required()
}