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
				$stateProvider.state('app-forum', {
					abstract : true,
					url : '/app-forum',
					template : '<div ui-view class="ui-view-main" />'
				}).state('app-forum.home', {
					url : '/home',
					templateUrl : 'website/forum-home.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('app-forum.category', {
					url : '/category',
					templateUrl : 'website/forum-category.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('app-forum.thread', {
					url : '/thread',
					templateUrl : 'website/forum-thread.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				});
			});

})();