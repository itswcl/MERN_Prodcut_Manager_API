const Product = require("../models/product.model");

module.exports = {
    // index route to test if working
    index: (req, res) => {
        res.json({message: "Hello World"})
    },

    // Read All
    findProducts: (req, res) => {
        Product.find()
            .then(products => res.json({products: products, message: "success"}))
    },

    createProduct: (req, res) => {
        const {title, price, description} = req.body;
        Product.create({
            title,
            price,
            description
        }).then(person => res.json({person: person.data}))
            .catch(err => res.json(err))
    }
}