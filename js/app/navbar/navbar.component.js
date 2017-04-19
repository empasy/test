'use strict'

angular.module('navbar')
	.component('navbar', {
		templateUrl: 'templates/navbar.html',
		controller: function( $scope ){
			$scope.name = 'Gary Arce Díaz'
		}
	});