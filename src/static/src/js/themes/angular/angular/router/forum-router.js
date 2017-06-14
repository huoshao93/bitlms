(function() {
	'use strict';

	var app = angular.module('app');

	app.run([ '$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			} ]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
				$stateProvider.state('website-forum', {
					abstract : true,
					url : '/website-forum',
					template : '<div ui-view class="ui-view-main" />'
				}).state('website-forum.home', {
					url : '/home',
					templateUrl : 'website/forum-home.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('website-forum.category', {
					url : '/category',
					templateUrl : 'website/forum-category.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('website-forum.thread', {
					url : '/thread',
					templateUrl : 'website/forum-thread.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				});
			});

})();