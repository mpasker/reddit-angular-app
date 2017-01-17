var app = angular.module('redditApp', ['ngRoute', 'ngResource', 'redditApp.factories', 'redditApp.controllers']);

app.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider
            .when('/welcome',{
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeController'
            })
            .when('/subreddit',{
                templateUrl: 'views/input.html',
                controller: 'InputController'
            })
            .when('/r/:id',{
                templateUrl: 'views/subreddit.html',
                controller: 'SubredditController'
            })
            .otherwise({
                redirectTo: '/welcome'
            })
    }]);