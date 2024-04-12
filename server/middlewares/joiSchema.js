const Joi = require('joi')

//string
exports.string = Joi.string().allow(null, '')
exports.stringRequired = Joi.string().required()

//number
exports.number = Joi.number().allow(null)
exports.numberRequired = Joi.number().required()

//array
exports.array = Joi.array().allow(null, '')
exports.arrayRequired = Joi.array().required()