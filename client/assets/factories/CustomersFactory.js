app.factory('CustomersFactory', ['$http', function($http) {

    // console.log("CustomersFactory loading");

    var factory = {};

    factory.index = function(callback) {

        // console.log("CustomersFactory index function called");

        $http.get('/customers')
        .then(function(res) {
            callback(res.data);
        });
    }

    factory.create = function(newCustomer, callback) {

        // console.log("CustomersFactory create function called");
        $http.post('/customers', newCustomer)
        .then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
            };
        });
    }

    factory.delete = function(id, callback) {
        // console.log("CustomersFactory delete function called");
        console.log("customer id sent form partial to factory: --> ", id);

        $http.delete('/customers/delete/'+ id)
        .then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
            };
        });
    }

    return factory;

}]);