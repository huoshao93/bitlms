(function() {
	'use strict';

	var app = angular.module('app');

	app.run([ '$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
				$rootScope.htmlClass = {
						website : 'transition-navbar-scroll top-navbar-xlarge bottom-footer',
						websitePricing : 'top-navbar-xlarge bottom-footer app-desktop',
						websiteSurvey : 'top-navbar-xlarge bottom-footer app-desktop app-mobile',
						websiteLogin : 'hide-sidebar ls-bottom-footer',
						websiteTakeQuiz : 'transition-navbar-scroll top-navbar-xlarge bottom-footer app-desktop app-mobile',
						appl3 : 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l3',
						appl1r3 : 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l1 sidebar-r3'
					};
			} ]);
	
	app.config(function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/website-pages/home');

				$stateProvider.state('login', {
					url : '/login',
					templateUrl : 'website/login.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.websiteLogin;
						$scope.app.settings.bodyClass = 'login';
					} ]
				}).state('sign-up', {
					url : '/sign-up',
					templateUrl : 'website/sign-up.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.websiteLogin;
						$scope.app.settings.bodyClass = 'login';
					} ]
				})
				.state('apply-online', {
					url : '/apply-online',
					templateUrl : 'website/apply-online.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.websiteSurvey;
						$scope.app.settings.bodyClass = 'survey';
					} ]
				});
			});

})();