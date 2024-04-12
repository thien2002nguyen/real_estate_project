const router = require('express').Router()
const Joi = require('joi')
const ctrls = require('../controllers/auth')
const validateDto = require('../middlewares/validation')
const { stringRequired, numberRequired } = require('../middlewares/joiSchema')

router.post(
    '/register',
    validateDto(Joi.object({
        name: stringRequired,
        phone: stringRequired,
        password: numberRequired,
        role: stringRequired
    })),
    ctrls.register
)

router.post(
    '/signin',
    validateDto(Joi.object({
        phone: numberRequired,
        password: stringRequired,
    })),
    ctrls.signIn
)

module.exports = router