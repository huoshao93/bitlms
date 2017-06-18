(function() {
	'use strict';

	var app = angular.module('app');

	app.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
				$stateProvider
						.state('website-pages', {
							abstract : true,
							url : '/website-pages',
							template : '<div ui-view class="ui-view-main" />'
						})
						.state('website-pages.home', {
							url : '/home',
							templateUrl : 'website/home.html',
							controller : 'homeCtrl'
						})
						.state('website-pages.contact',
								{
									url : '/contact',
									templateUrl : 'website/contact.html',
									controller : [
											'$scope','$rootScope',
											function($scope, $rootScope) {
												$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
												$scope.app.settings.bodyClass = '';
											} ]
								});
			});

})();