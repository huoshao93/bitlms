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
				$stateProvider.state('website-blog', {
					abstract : true,
					url : '/website-blog',
					template : '<div ui-view class="ui-view-main" />'
				}).state('website-blog.listing', {
					url : '/listing',
					templateUrl : 'website/blog-listing.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('website-blog.post', {
					url : '/post',
					templateUrl : 'website/blog-post.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				});
			});
})();