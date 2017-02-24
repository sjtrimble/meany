app.controller('productsController', function($scope, ProductsFactory, $routeParams, $location) {
    console.log("products controller loading");

    var index = function() {
        ProductsFactory.index(function(data) {
            // console.log(data);
            $scope.products = data;
        });
    };

    index();

    $scope.create = function() {
        console.log("product controller create function called");
        ProductsFactory.create($scope.newProduct, function(data) {
            $scope.product = data;
            $scope.newProduct = {};
        });
        index();
    };
    
});