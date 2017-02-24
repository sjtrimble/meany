app.factory('UsersFactory', ['$http', function($http) {

    var factory = {};
    factory.userLoggedIn = false;


    factory.login = function(callback){
		while(factory.userLoggedIn === false) {
			factory.userLoggedIn = prompt("Please enter your username","username");
			// console.log(factory.userLoggedIn)
		}
		return callback(factory.userLoggedIn);
	}


	factory.logout = function(callback){
		factory.userLoggedIn = false;
		return callback(factory.userLoggedIn);
	}

    return factory;

}]);
