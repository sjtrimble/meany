var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app) {
    console.log("routes loading");

    // CUSTOMER ROUTES

    app.get('/customers', customers.index)

    app.post('/customers', customers.create)

    app.delete('/customers/delete/:id', customers.delete)

    // PRODUCT ROUTES

    app.get('/products', products.index)

    app.post('/products', products.create)

    // app.get('/products/:id', products.checkQuantity)

    // ORDER ROUTES

    app.get('/orders', orders.index)

    app.post('/orders', orders.create)

}