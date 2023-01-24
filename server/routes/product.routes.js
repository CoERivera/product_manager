const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
    app.get('/api', ProductController.createProduct);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
}

