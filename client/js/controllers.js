var c = angular.module('redditApp.controllers', []);

c.controller('WelcomeController', ['$scope', '$rootScope', '$location', 
    function($scope, $rootScope, $location){
        $scope.setUser = function(){
            $rootScope.getCurrentUser = $scope.username;
            $scope.username = '';
            $location.path('/subreddit');
        }
    }]);

c.controller('InputController', ['$scope', '$location', '$routeParams', 'DefaultSubreddits',
    function($scope, $location, $routeParams, DefaultSubreddits){
        var subredditId = $routeParams.id;
        //execute function on button click for subreddit input.
        $scope.enterSub = function() {
            //singleSub value grabbed from input model.
            $scope.singleSub;
            //set the routeParam to value from input model.
            subredditId = $scope.singleSub;
            console.log(subredditId);
            //navigate to routeParam where SubredditController will be executed
            $location.path('r/' + subredditId);
        };
        
        $scope.posts = DefaultSubreddits.get(function(response){
            $scope.subs = [];
            console.log($scope.subs);
            var dataset = response.data.children;
            for(var i = 0; i < dataset.length; i++){
                $scope.subs.push(dataset[i].data);
            }
        },function(err){
            alert('Error! Could not retrieve default subreddits.')
        });
    }]);

c.controller('SubredditController', ['$scope', 'ViewSubreddit', '$routeParams', '$location',
    function($scope, ViewSubreddit, $routeParams, $location){
        var subredditId = $routeParams.id;
        //get subreddit from resourse
        //id is set to routeParam
        $scope.subreddit = ViewSubreddit.get({id:subredditId}, function(response){
            //scope posts to empty array
            $scope.posts = [];
            console.log($scope.posts);
            //loop response from get request and push information into posts array
            var dataset = response.data.children;
            for(var i = 0; i < dataset.length; i++){
                $scope.posts.push(dataset[i].data);
            }
        },function(err){
            alert('Error! Could not load subreddit detail.')
        });
        $scope.goBack = function() {
            $location.path('/subreddit');
        }
    }]);
