'use strict';

var myApp = angular.module('carRegApp', ['ui.bootstrap']);

myApp.controller('mainController', function($scope) {
    //global variable $scope?
    //$scope.name = "Shawn";
    //$scope.page = "index";
    //$scope.getName = function() {
    //    return "Shawn's homepage";
    //};
    //console.log($scope);

    $scope.validate = function() {
        console.log($scope.name);
    };
});
