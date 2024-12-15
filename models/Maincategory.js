const mongoose = require("mongoose")

const MaincategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Maincateory Name Field is Mendatory'],
        unique: true
    },
    pic: {
        type: String,
        required: [true, 'Pic Field is Mendatory']
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Maincateory = new mongoose.model("Maincategory", MaincategorySchema)

module.exports = Maincateory