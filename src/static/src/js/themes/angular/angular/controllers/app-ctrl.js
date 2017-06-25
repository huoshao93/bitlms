(function() {
	"use strict";

	var app = angular.module('app');

	app.controller('AppCtrl', function($scope, $state) {
		$scope.app = {
			settings : {
				htmlClass : '',
				bodyClass : ''
			}
		};
		$scope.$state = $state;

	});

	app.controller('navBarCtrl', function($scope, $state, UserService) {
		UserService.get({ "id": 'Bill' },function(res) {
			$scope.user = res;
		}, function(error) {
			console.log("get all tutors fail: " + error);
		});
	});

})();
