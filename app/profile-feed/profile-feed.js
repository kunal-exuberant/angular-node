'use strict';

angular.module('myApp.profile-feed', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile-feed/:profileid', {
      controller: 'profileFeedCtrl',
      controllerAs: 'pfc',
      templateUrl: 'app/profile-feed/profile-feed.html'
  });
}])

.controller('profileFeedCtrl', ['newsFeedApi','$route', function(newsFeedApi, $route) {
    var vm = this;
    newsFeedApi.profileFeedFetch($route.profileid).$promise.then(function (response) {
      console.log(response);
      vm.profileFeedData = response;
    },
    function(){
        console.log("Failed to fetch data from profileFeed service");
    });
}]);