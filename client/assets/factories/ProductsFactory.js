app.factory('ProductsFactory', ['$http', function($http) {

    // console.log("ProductsFactory loading");

    var factory = {};

    factory.index = function(callback) {

        // console.log("ProductsFactory index function called");

        $http.get('/products')
        .then(function(res) {
            callback(res.data);
        });
    }

    factory.create = function(newProduct, callback) {

        console.log("ProductsFactory create function called");
        $http.post('/products', newProduct)
        .then(function(res) {
            console.log(res.data)
            if (typeof(callback) === 'function') {
                callback(res.data);
            };
        });
    }

    factory.checkQuantity = function(id, quantityOrdered) {
        console.log("checking quantity of order with ProductsFactory");
        $http.get('/products/'+id, quantityOrdered)
        .then(function(res) {
            callback(res.data)
        })
    }

    return factory;

}]);