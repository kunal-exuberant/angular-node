'use strict';

angular.module('myApp.news-feed', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/news-feed', {
        controller: 'newsFeedCtrl',
        controllerAs: 'nfc',
        templateUrl: 'app/news-feed/templates/news-feed.html'

    });
}])

.controller('newsFeedCtrl', ['newsFeedApi',function(newsFeedApi) {
    var vm = this;
    newsFeedApi.get().$promise.then(function (response) {
            console.log(response);
            vm.newFeedData = response;
    },
    function(){
        console.log("Failed to fetch data from newsFeed service");
    });
}]);

