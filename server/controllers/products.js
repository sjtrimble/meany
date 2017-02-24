var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

    index: function(req, res) {
        console.log("initiating product index sever controller")

        Product.find({}, function(err, products) {
            if(err) {
                console.log("error found: ", err);
                res.json(err);
            } else {
                console.log("product search successful from DB");
                res.json(products);
            };
        });
    },

    create: function(req, res) {

        console.log("reached product create server controller with the following req body: -->", req.body);
        var newProduct = new Product({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            quantity: req.body.quantity
        });

        newProduct.save(function(err, addedProduct) {
            if(err) {
                console.log("error saving new product");
                res.json(err);
            } else {
                console.log("new product created: ", addedProduct);
                res.json(addedProduct);
            };
        });
    }
}