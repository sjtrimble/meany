app.factory('OrdersFactory', ['$http', function($http) {

    // console.log("OrdersFactory loading");

    var factory = {};

    factory.index = function(callback) {

        // console.log("OrdersFactory index function called");

        $http.get('/orders')
        .then(function(res) {
            callback(res.data);
            // console.log("all orders / index data: ", res.data);
        });
    }

    factory.create = function(newOrder, callback) {

        // console.log("OrdersFactory create function called");

        $http.post('/orders', newOrder)
        .then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
                console.log("response from server received in factory: ", res.data);
            };
        });
    }

    return factory;

}]);