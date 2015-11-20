'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngResource',
  'ngRoute',
  'myApp.news-feed',
  'myApp.view1',
  'myApp.profile-feed',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
