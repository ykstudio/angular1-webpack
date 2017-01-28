import angular from 'angular';
require('./style.scss');

angular.module('myApp', [])
.controller('myController', ['$scope', function($scope) {
    $scope.message = "this is a message";
}])
