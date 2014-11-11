'use strict';

// Declare app level module which depends on filters, and services

var pacmanApp = angular.module('pacmanApp', [
  'ngRoute',
  'pacmanControllers',
  'pacmanServices'
])

pacmanApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
  when('/home', {
    controller: 'gameController'
  }).
  when('/view2', {
    templateUrl: 'partials/partial2.html',
    controller: 'MyCtrl2'
  }).
  otherwise({
    redirectTo: '/home'
  });

}]);