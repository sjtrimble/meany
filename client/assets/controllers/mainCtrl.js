app.controller('mainCtrl', function($scope, GamesFactory, UsersFactory, QuestionsFactory, $routeParams, $location) {
    console.log("main controller loading");

    var updateScores = function() {
        GamesFactory.index(function(data) {
            $scope.games = data;
        })
    }
    updateScores();


    $scope.loginUser = function() {
		UsersFactory.login(function(user) {
			$scope.userLoggedIn = user;
		});
	}

	$scope.logoutUser = function() {
		UsersFactory.logout(function(user) {
			$scope.userLoggedIn = user;
			// $route.reload();
		});
	}

})