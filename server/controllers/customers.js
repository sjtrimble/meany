var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {

    index: function(req, res) {
        console.log("initiating customer index sever controller")

        Customer.find({}, function(err, customers) {
            if(err) {
                console.log("error found: ", err);
                res.json(err);
            } else {
                console.log("customer search successful from DB");
                res.json(customers);
            };
        });
    },

    create: function(req, res) {
        var newCustomer = new Customer({name: req.body.name});
        newCustomer.save(function(err, addedCustomer) {
            if(err) {
                console.log("error saving new customer");
                res.json(err);
            } else {
                console.log("new customer created");
                res.json(addedCustomer);
            };
        });
    },

    delete: function(req, res) {
        console.log("params id: --> ", req.params.id);

        Customer.findOne({_id: req.params.id}, function(err, cutsomer) {
            if(err) {
                console.log("Error: customer not found in DB");
                res.json(err);
            } else {
                console.log("Success: Customer to delete found in DB");
                Customer.remove({_id: req.params.id}, function(err, customer) {
                    if(err) {
                        console.log("Error: Did not successfully delete customer in DB");
                        res.json(err);
                    } else {
                        console.log("Success: Customer deleted successfully in DB");
                        res.json(customer);
                    };
                });
            };
        }); 
    }
};