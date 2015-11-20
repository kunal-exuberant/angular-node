(function(){
    angular.module('myApp').factory('newsFeedApi', newsFeedApi);

    newsFeedApi.$inject = ['$resource', '$routeParams', '$route'];

    function newsFeedApi($resource, $routeParams, $route) {
        $route.reload();
        var serviceUrl = 'http://localhost:3000/';
        var service = $resource(serviceUrl,{},{
            getByActionStart:{
                method:'GET',
                url:serviceUrl+'users',
                params:{action:'@action',start:'@start'}
            },
            get:{
                method:'GET',
                url:serviceUrl+'news-feed',
                params:{}
            },
            profileFeedFetch:{
                method:'GET',
                url:serviceUrl+'profile-feed',
                params:{profileid:$routeParams.profileid}
            }
        });
        return service;
    }
})();

