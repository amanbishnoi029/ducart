const mongoose = require("mongoose")

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Mendatory']
    },
    email: {
        type: String,
        required: [true, 'Email Address is Mendatory']
    },
    phone: {
        type: Number,
        required: [true, 'Phone Number is Mendatory']
    },
    subject: {
        type: String,
        required: [true, 'Subject is Mendatory']
    },
    message: {
        type: String,
        required: [true, 'Message is Mendatory']
    },
    date: {
        type: String,
        default: ""
    },
    active: {
        type: Boolean,
        default: true
    }
})

const ContactUs = new mongoose.model("ContactUs", ContactUsSchema)

module.exports = ContactUs