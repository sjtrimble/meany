var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/dashboard'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/orders', {
        templateUrl: 'partials/orders.html',
        controller: 'ordersController'
    })
    .when('/products', {
        templateUrl: 'partials/products.html',
        controller: 'productsController'
    })
    .when('/customers', {
        templateUrl: 'partials/customers.html',
        controller: 'customersController'
    })
    .otherwise({
        redirectTo: '/'
    })
})