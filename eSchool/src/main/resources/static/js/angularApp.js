// also include ngRoute for all our routing needs
var eSchool = angular.module('eschool', [ 'ngRoute' ]);

// configure our routes
eSchool.config(function($routeProvider, $httpProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : '/eschool/home.html',
		controller : 'mainController'
	})
	
	.when('/login', {
		templateUrl : '/eschool/login.html',
		controller : 'navigation'
	})

	// route for the about page
	.when('/about', {
		templateUrl : '/eschool/about.html',
		controller : 'aboutController'
	})

	// route for the contact page
	.when('/contact', {
		templateUrl : '/eschool/contact.html',
		controller : 'contactController'
	});
	
	/*
	 * The custom "X-Requested-With" is a conventional header sent by browser
	 * clients, and it used to be the default in Angular but they took it out in
	 * 1.3.0. Spring Security responds to it by not sending a "WWW-Authenticate"
	 * header in a 401 response, and thus the browser will not pop up an
	 * authentication dialog (which is desirable in our app since we want to
	 * control the authentication).
	 */
	debugger;
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

// create the controller and inject Angular's $scope
eSchool.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

eSchool.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

eSchool.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});

eSchool.controller('navigation', function($rootScope, $http, $location) {
	var self = this

	var authenticate = function(credentials, callback) {

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
			} else {
				$rootScope.authenticated = false;
			}
			callback && callback();
		}, function() {
			$rootScope.authenticated = false;
			callback && callback();
		});

	}

	authenticate();
	self.credentials = {};
	self.login = function() {
		authenticate(self.credentials, function() {
			if ($rootScope.authenticated) {
				$location.path("/");
				self.error = false;
			} else {
				$location.path("/login");
				self.error = true;
			}
		});
	};
	
	self.logout = function() {
		$http.post('logout', {}).finally(function() {
			$rootScope.authenticated = false;
			$location.path("/");
		});
	};
});