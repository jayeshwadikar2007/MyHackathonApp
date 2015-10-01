'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PersonEditCtrl
 * @description
 * # PersonEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('PersonEditCtrl', function (
  $scope,
  $routeParams,
  Person,
  $location
) {
  $scope.editPerson = true;
  $scope.Person = {};
  Person.one($routeParams.id).get().then(function(person) {
    $scope.person = person;
    $scope.savePerson = function() {
      $scope.person.save().then(function() {
        $location.path('/person/' + $routeParams.id);
      });
    };
  });
});
