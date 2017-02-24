var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {

    index: function(req, res) {
        console.log("initiating order index sever controller")

        Order.find({})
        .populate('_customer _product')
        .exec(function(err, orders) {
            if(err) {
                console.log("error found: ", err);
                res.json(err);
            } else {
                console.log("order search successful from DB: ", orders);
                res.json(orders);
            };
        });
    },

    create: function(req, res) {
        console.log("order made it to backend")
        // console.log("req body printed in backend: ", req.body)

        var quantityOrdered         = req.body.quantity,
            _customer               = req.body.customer._id,
            _product                = req.body.product._id,
            updatedProductQuantity  = Number(req.body.product.quantity) - Number(quantityOrdered)

        var newOrder = new Order({quantity: quantityOrdered, _customer: _customer, _product: _product});
        newOrder.save(function(err, addedOrder) {
            if(err) {
                console.log("error saving new order");
                res.json(err);
            } else {
                console.log("new order created");
                Product.findOne({_id: _product}, function(err, foundProduct) {
                    if(err) {
                        console.log("Error: product not found in DB");
                        res.json(err);
                    } else {
                        foundProduct.quantity = updatedProductQuantity
                        foundProduct.save(function (error, data) {
                            if (error) {
                                console.log("Error: ", error);
                                res.json(error);
                            } else {
                                console.log("product updated: -->")
                                res.json(foundProduct);
                            };
                        });
                    };
                });
            };
        });
    }
};