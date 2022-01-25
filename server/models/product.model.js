const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title: { type: String, require: [true, "{PATH} required"] },
    price: { type: Number, require: [true, "price required"] },
    description: { type: String, require: [true, "{PATH} required"] }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;