// import product controller
const ProductController = require('../controllers/product.controller')
module.exports = function(app) {
    app.get("/", ProductController.index);
    app.get("/api/products", ProductController.findProducts)
    app.post("/api/products/new", ProductController.createProduct)
}