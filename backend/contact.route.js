const express = require('express')
const { inquiryFormSubmission } = require('./contact.controller')

const contactRouter = express.Router()

contactRouter.post('/inquiry', inquiryFormSubmission)

module.exports = contactRouter