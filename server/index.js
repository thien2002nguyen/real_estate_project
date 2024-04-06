const express = require('express')
require('dotenv').config()
const cors = require('cors')
const dbConnetion = require('./config/dbConnect')
const dbConnection = require('./config/dbConnect')
const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConnection()

const PORT = process.env.PORT || 8888
app.listen(PORT, () => console.log('Server on port:', PORT))