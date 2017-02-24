app.controller('ordersController', function($scope, CustomersFactory, ProductsFactory, OrdersFactory, $routeParams, $location) {
    // console.log("orders controller loading");
    $scope.customers = [];
    $scope.products = [];
    $scope.orders = [];
    $scope.errorMessages = [];

    var initialLoad = function() {
        CustomersFactory.index(function(data) {
            // console.log(data);
            $scope.customers = data;
        });
        ProductsFactory.index(function(data) {
            $scope.products = data;
        })
    };
    initialLoad();

    var updateOrders = function() {
        OrdersFactory.index(function(data) {
            $scope.orders = data;
        });
    };

    updateOrders();

    $scope.create = function() {
        // console.log("orders controller create function called");
        console.log("new order from partial: ", $scope.newOrder)

        var quantityRemaining = Number($scope.newOrder.product.quantity)
        var quantityRequested = Number($scope.newOrder.quantity)
        var productId = $scope.newOrder.product._id

        console.log("remaining: ", quantityRemaining, "| requested: ", quantityRequested)

        if (quantityRequested <= quantityRemaining) {
            console.log(quantityRequested, "< ", quantityRemaining, "quantity requested is less than quantity remaining");
            OrdersFactory.create($scope.newOrder, function(data) { // what create returns would go inside function as data
                $scope.newOrder = {};
            });
            updateOrders();
        } else {
            let errorMessage = "There are only " + quantityRemaining + " items remaining. Please order fewer items."
            $scope.errorMessages.push(errorMessage);
        }
    }
})