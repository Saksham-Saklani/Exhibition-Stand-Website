const contactModel = require('./contact.model')

const inquiryFormSubmission = async(req , res) => {
    try {
        const {name, email, subject, message, company} = req.body

        if(!name || !email || !message || !subject || !company ){
            return res.status(400).json({message: "all fields are required"})
        }

        const contact = await contactModel.create({
            name,
            email,
            subject,
            message,
            company
        })

        return res.status(200).json({message: "Form Submitted Successfully"})

    } catch (error) {
        return res.status(500).json({message: `Form Submission Failed: ${error}`})
    }
}

module.exports = { inquiryFormSubmission }

