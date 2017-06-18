(function(){
    'use strict';

    var app = angular.module('app');
       app.config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/website-pages/home');

                $stateProvider
                    .state('website-instructor', {
                        abstract: true,
                        url: '/website-instructor',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-instructor.all',
							{
								url : '/all',
								templateUrl : 'website/instructors.html',
								controller : [
										'$scope','$rootScope',
										function($scope,$rootScope) {
											$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
											$scope.app.settings.bodyClass = '';
										} ]
							})		
					.state('website-instructor.public-profile',
							{
								url : '/pubprof',
								templateUrl : 'website/instructor-pubprof.html',
								controller : [
										'$scope','$rootScope',
										function($scope,$rootScope) {
											$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
											$scope.app.settings.bodyClass = '';
										} ]
							});
            });
})();