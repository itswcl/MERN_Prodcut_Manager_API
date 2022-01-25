// import product controller
const ProductController = require('../controllers/product.controller')
module.exports = function(app) {
    app.get("/", ProductController.index);
    app.get("/api/products", ProductController.findAll)
    // :id should match the findById(req.params.id) in controller
    app.get("/api/products/:id", ProductController.findOne)
    app.post("/api/products/new", ProductController.createOne)

    app.put("/api/products/update", ProductController.update)
    app.delete("/api/products/:id", ProductController.delete)
}