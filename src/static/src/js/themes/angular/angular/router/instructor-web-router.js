(function(){
    'use strict';

    var app = angular.module('app');
       app.config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/website-pages/home');

                $stateProvider
                    .state('website-tutors', {
                        abstract: true,
                        url: '/website-tutuos',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-tutors.all',
							{
								url : '/all',
								templateUrl : 'website/tutors.html',
								controller : [
										'$scope','$rootScope',
										function($scope,$rootScope) {
											$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
											$scope.app.settings.bodyClass = '';
										} ]
							})		
            });
})();