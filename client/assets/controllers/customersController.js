app.controller('customersController', function($scope, CustomersFactory, $routeParams) {
    console.log("customers controller loading");

    var index = function() {
        CustomersFactory.index(function(data) {
            // console.log(data);
            $scope.customers = data;
        });
    };

    index();

    $scope.create = function() {
        console.log("customer controller create function called");
        CustomersFactory.create($scope.newCustomer, function(data) {
            console.log("Data: ", data);
            $scope.newCustomer = {};
        });
        index();
    };

    $scope.delete = function(id) {
        // console.log("customer controller delete function called");

        console.log("customer id passed through by click: -->", id)

        CustomersFactory.delete(id, function(data) {
            index();
        });
    }
});