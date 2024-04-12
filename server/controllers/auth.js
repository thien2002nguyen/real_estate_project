const asyncHandler = require('express-async-handler')
const db = require('../models')
const { throwErrorWithStatus } = require('../middlewares/errorHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//client = urlencoded || formdata => req.body
//client = params (?) => req.query
//client = api/user/:id => req.params

const register = asyncHandler(async (req, res) => {
    const { phone, role } = req.body
    //Check role user
    if (role === 'admin') {
        throw new Error('Account creation failed')
    }
    //Check phone already exists in the database
    //Create account
    const response = await db.User.findOrCreate({
        where: { phone: phone },
        defaults: req.body
    })
    //Send response
    return res.status(201).json({
        success: response[1] ? true : false,
        mes: response[1] ? 'Your account is created' : 'Phone number already exist'
    })
})

const signIn = asyncHandler(async (req, res, next) => {
    const { phone, password } = req.body
    //Check phone already exists in the database
    //Validate password
    const user = await db.User.findOne({ where: { phone: phone } })
    if (!user) {
        return throwErrorWithStatus(401, 'Phone number or password does not exist', res, next)
    }
    // Validate the password
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
        return throwErrorWithStatus(401, 'Phone number or password does not exist', res, next)
    }
    //Create token
    const token = jwt.sign({ uid: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
    //Send response
    return res.status(200).json({
        success: true,
        mes: 'Logged in successfully',
        accessToken: token
    })
})

module.exports = {
    register,
    signIn,
}