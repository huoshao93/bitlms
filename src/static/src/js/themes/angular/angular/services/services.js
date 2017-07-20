(function() {
	"use strict";

	var serverUrl = 'http://localhost:8888/api';
	
	var app = angular.module('app');
	
	app.factory('UserService', function ($resource) {
	    return $resource('', {}, {
	    	get: {method: 'GET', url: serverUrl+'/users/:id', params:{id: '@id'}, isArray: false},
	    	create: {method: 'POST', url: serverUrl+'/users/reg'}
	    	
	    });
	});
	

})();