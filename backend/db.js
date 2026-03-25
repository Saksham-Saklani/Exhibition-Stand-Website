const mongoose = require('mongoose')
require('dotenv').config()

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb