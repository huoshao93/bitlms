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
		
		UserService.get({ "id": '1' },function(res) {
			$scope.user = res;
		}, function(error) {
			console.log("get user fail: " + error);
		});
		
		UserService.create({ "firstName":"Jim",
			"lastName":"Green",
			"mobile":"123456",
			"email":"jim@gmail.com"
		},function(res) {
			$scope.user = res;
		}, function(error) {
			console.log("get user fail: " + error);
		});
	});

})();
