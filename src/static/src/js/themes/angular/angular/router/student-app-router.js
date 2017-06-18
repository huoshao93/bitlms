(function() {
	'use strict';

	var app = angular.module('app');

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
		$stateProvider
        .state('app-student', {
            abstract: true,
            url: '/app-student',
            template: '<div ui-view class="ui-view-main" />'
        })
        .state('app-student.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/student-dashboard.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.messages', {
            url: '/messages',
            templateUrl: 'app/student-messages.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.private-profile', {
            url: '/profile',
            templateUrl: 'app/student-profile.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.billing', {
            url: '/billing',
            templateUrl: 'app/student-billing.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.changepass', {
            url: '/changepass',
            templateUrl: 'app/student-changepass.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.program-javadev', {
            url: '/program-javadev',
            templateUrl: 'app/student-courses.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.take-course', {
            url: '/take-course',
            templateUrl: 'app/student-take-course.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.take-quiz', {
            url: '/take-quiz',
            templateUrl: 'app/student-take-quiz.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        });		
	});

})();