const express = require("express");
const cors = require("cors");
require('dotenv').config()
const connectDb = require('./db')
const contactRouter = require('./contact.route')

const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json())


app.use('/api',contactRouter)

app.listen(PORT, () => {
    connectDb()
    console.log(`server started on port ${PORT}`)
})

