(function(){
    'use strict';

    var app = angular.module('app');
       app.config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/website-pages/home');

                $stateProvider
                    .state('website-program', {
                        abstract: true,
                        url: '/website-program',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-program.javadev', {
                        url: '/javadev',
                        templateUrl: 'website/program-javadev.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });
            });
})();