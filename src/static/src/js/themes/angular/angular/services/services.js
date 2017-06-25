(function() {
	"use strict";

	var serverUrl = 'http://localhost:8888/api';
	
	var app = angular.module('app');
	
	app.factory('UserService', function ($resource) {
	    return $resource(serverUrl+'/users/:id', {id: '@id'}, {});
	});

})();