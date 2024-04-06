require('dotenv').config()

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.BD_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        loggin: false,
        timezone: "+07:00"
    }
}