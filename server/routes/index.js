const { errorHandler, badRequestException } = require('../middlewares/errorHandler')
const auth = require('./auth')

const initRouters = (app) => {
    app.use('/api/v1/auth', auth)

    app.use(badRequestException)
    app.use(errorHandler)
}

module.exports = initRouters