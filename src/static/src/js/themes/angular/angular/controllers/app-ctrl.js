(function () {
    "use strict";

  var app = angular.module('app');
  
  app.controller('AppCtrl',
            function ($scope, $state) {
                $scope.app = {
                    settings: {
                        htmlClass: '',
                        bodyClass: ''
                    }
                };
                $scope.$state = $state;

            } );
  
  app.controller('navBarCtrl', 
                function ($scope, $state) {
                    $scope.user = {
                    		name:'Bill Gates2'
                    };
                } );

})(); 
