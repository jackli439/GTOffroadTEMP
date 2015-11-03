'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.mainpage',
  'myApp.calendar',
  'myApp.interested',
  'myApp.history',
  'myApp.rankings',
  'myApp.directives',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'mainpage'});
}])
.controller('RootCtrl', ['$rootScope','$location', '$scope', '$anchorScroll', function($rootScope, $location, $scope, $anchorScroll){
	this.changeLoc = function(addr){
		$location.url(addr);
	}
    
    this.jumpToLocation = function(){
        $location.hash("foobar");
        $anchorScroll();
        console.log("activated");
    }
    
    this.foo = "bar";
    
}])
