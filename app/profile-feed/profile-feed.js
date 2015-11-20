'use strict';

angular.module('myApp.profile-feed', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile-feed', {
    templateUrl: 'app/profile-feed/profile-feed.html',
    controller: 'profileFeedCtrl'
  });
}])

.controller('profileFeedCtrl', ['newsFeedApi', function(newsFeedApi) {
    var vm = this;
    newsFeedApi.profileFeedFetch().$promise.then(function (response) {
      console.log(response);
      vm.profileFeedData = response;
    });
}]);