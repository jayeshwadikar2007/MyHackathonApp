'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PersonDeleteCtrl
 * @description
 * # PersonDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('PersonDeleteCtrl', function (
  $scope,
  $routeParams,
  Person,
  $location
) {
  $scope.person = Person.one($routeParams.id).get().$object;
  $scope.deletePerson = function() {
    $scope.person.remove().then(function() {
      $location.path('/persons');
    });
  };
  $scope.back = function() {
    $location.path('/person/' + $routeParams.id);
  };
});
