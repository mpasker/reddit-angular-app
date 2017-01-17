var app = angular.module('redditApp.factories', []);

var baseUrl = 'https://www.reddit.com/';

app.factory('DefaultSubreddits',['$resource', function($resource){
    return $resource(baseUrl + 'subreddits/default/.json');
}]);

app.factory('ViewSubreddit', ['$resource', function($resource){
    return $resource(baseUrl + 'r/:id.json', {id: '@subreddit'})
}]);