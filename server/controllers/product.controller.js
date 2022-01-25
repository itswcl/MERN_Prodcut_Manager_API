const Product = require("../models/product.model");

module.exports = {
    // index route to test if working
    index: (req, res) => {
        res.json({ message: "Hello World" })
    },
// ------------------------------ CRUD ------------------------------
    // ---------------- Create ----------------
    createOne: (req, res) => {
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description
        }).then(person => res.json({ person: person.data }))
            .catch(err => res.json(err))
    },


    // ---------------- Read All ----------------
    findAll: (req, res) => {
        Product.find()
            .then(products => res.json({ products: products, message: "success" }))
    },


    // ---------------- Read One ----------------
    findOne: (req, res) => {
        // Product.findOne({_id: req.params.id})
        Product.findById(req.params.id)
            .then(product => res.json({product: product, message: "success"}))
            .catch(err => res.json({message: "failed", error: err}))
    }
}