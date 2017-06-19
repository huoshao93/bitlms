(function() {
	'use strict';

	var app = angular.module('app');

	app.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
		 $stateProvider
         .state('app-instructor', {
             abstract: true,
             url: '/app-instructor',
             template: '<div ui-view class="ui-view-main" />'
         })
         .state('app-instructor.dashboard', {
             url: '/dashboard',
             templateUrl: 'app/instructor-dashboard.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.classes', {
             url: '/classes',
             templateUrl: 'app/instructor-classes.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.programs', {
             url: '/programs',
             templateUrl: 'app/instructor-programs.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.courses', {
             url: '/courses',
             templateUrl: 'app/instructor-courses.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course', {
             url: '/edit-course',
             templateUrl: 'app/instructor-edit-course.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course-meta', {
             url: '/edit-course-meta',
             templateUrl: 'app/instructor-edit-course-meta.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course-lessons', {
             url: '/edit-course-lessons',
             templateUrl: 'app/instructor-edit-course-lessons.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course-lesson', {
             url: '/edit-course-lesson',
             templateUrl: 'app/instructor-edit-course-lesson.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.earnings', {
             url: '/earnings',
             templateUrl: 'app/instructor-earnings.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.statement', {
             url: '/instructor',
             templateUrl: 'app/instructor-statement.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.messages', {
             url: '/messages',
             templateUrl: 'app/instructor-messages.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.private-profile', {
             url: '/private-profile',
             templateUrl: 'app/instructor-private-profile.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.changepass', {
            url: '/changepass',
            templateUrl: 'app/instructor-changepass.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        });
	});

})();