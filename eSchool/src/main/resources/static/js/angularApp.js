// also include ngRoute for all our routing needs
var eSchool = angular.module('eschool', [ 'ngRoute' ]);

// configure our routes
eSchool.config(function($routeProvider, $httpProvider) {
	$routeProvider
	
	.when('/', {
		resolve: {
			redirect: function($rootScope, $location){
				if (!$rootScope.authenticated) {
					$location.path("/login");
				}else{
					$location.path("/home");
				}
			}
		}
	})

	.when('/login', {
		templateUrl : '/eschool/login.html',
		controller: 'loginController'
	})
	
	.when('/home', {
		templateUrl : '/eschool/home.html',
		controller : 'homeController'
	})

	.when('/about', {
		templateUrl : '/eschool/about.html',
		controller : 'aboutController'
	})

	.when('/contact', {
		templateUrl : '/eschool/contact.html',
		controller : 'contactController'
	})
	
	.otherwise('/login');
	
	/*
	 * The custom "X-Requested-With" is a conventional header sent by browser
	 * clients, and it used to be the default in Angular but they took it out in
	 * 1.3.0. Spring Security responds to it by not sending a "WWW-Authenticate"
	 * header in a 401 response, and thus the browser will not pop up an
	 * authentication dialog (which is desirable in our app since we want to
	 * control the authentication).
	 */
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

eSchool.controller('mainController', ['$rootScope', '$location', function($rootScope, $location) {
	debugger;
	if (!$rootScope.authenticated) {
		$location.path("/login");
	}else{
		$location.path("/home");
	}
}]);

eSchool.controller('homeController', ['$scope', 'checkAuthentication', function($scope, checkAuthentication) {
	//checkAuthentication();
	$scope.message = 'Home page';
}]);

eSchool.controller('loginController', function($scope, $rootScope, $location, $http) {
	var self = $scope;
	self.credentials = {};
	
	
	self.login = function() {
		var credentials = self.credentials;
		var headers = credentials ? {
			authorization : "Basic "
					+ btoa(credentials.username + ":" + credentials.password)
		} : {};

		$http.get('user', {
			headers : headers
		}).then(function(response) {
			console.log('get user: ' + response);
			if (response.data.name) {
				$rootScope.authenticated = true;
				$location.path("/home");
				self.error = false;
			} else {
				$rootScope.authenticated = false;
				$location.path("/login");
				self.error = true;
			}
		}, function() {
			$rootScope.authenticated = false;
			$location.path("/login");
			self.error = true;
		});
	};
});

eSchool.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

eSchool.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});

eSchool.controller('navigation', function($rootScope, $http, $location) {
	var self = this;
	
	self.logout = function() {
		$http.post('logout', {}).finally(function() {
			$rootScope.authenticated = false;
			$location.path("/login");
		});
	};
});

//services
eSchool.factory('checkAuthentication', ['$rootScope', '$location', function($rootScope, $location){
	return function(){
		if (!$rootScope.authenticated) {
			$location.path("/login");
		}
	}
}]);	