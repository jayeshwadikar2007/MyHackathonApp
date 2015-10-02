'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PersonAddCtrl
 * @description
 * # PersonAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('PersonAddCtrl', function (
  $scope,
  Person,
  $location
) {
  $scope.person = {};
  $scope.savePerson = function($scope) {
    Person.post($scope.person).then(function() {
      $location.path('/persons');
    });
  };
});
