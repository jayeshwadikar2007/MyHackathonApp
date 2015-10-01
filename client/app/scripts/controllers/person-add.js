'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PersonAddCtrl
 * @description
 * # PersonAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieAddCtrl', function (
  $scope,
  Person,
  $location
) {
  $scope.person = {};
  $scope.savePerson = function() {
    Movie.post($scope.person).then(function() {
      $location.path('/persons');
    });
  };
});
