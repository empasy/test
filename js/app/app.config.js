'use strict'

angular.module('rankmi')
	.factory('getData', function($http) {
		return {
			async: function() {
				return $http.get('../../data/processes.json');  //1. this returns promise
			}
		};
	})
	.controller('MainController', function(getData, $scope) {
	    $scope.title = 'Main Title';
	    $scope.activeProcess = [];
	    $scope.finishedProcess = [];

	    getData.async().then(function( procesess ){
	    	procesess.data.forEach( function ( process, index ){
	    		if ( process.status == 1 ) $scope.activeProcess.push(process);
	    		else $scope.finishedProcess.push(process);
	    	});
	    })
	})

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('dashboard', {
	            url: '/',
	            templateUrl: 'templates/main.html',
	            controller: 'MainController'
	        });
	});