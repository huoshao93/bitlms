(function(){
    'use strict';

    var app = angular.module('app');
       app.config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/website-pages/home');

                $stateProvider
                    .state('website-courses', {
                        abstract: true,
                        url: '/website-courses',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-courses.grid', {
                        url: '/grid',
                        templateUrl: 'website/courses-grid.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-courses.list', {
                        url: '/list',
                        templateUrl: 'website/courses-list.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-courses.single', {
                        url: '/single',
                        templateUrl: 'website/course.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });
            });
})();