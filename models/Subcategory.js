const mongoose = require("mongoose")

const SubcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subcateory Name Field is Mendatory'],
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

const Product = new mongoose.model("Subcategory", SubcategorySchema)

module.exports = Product