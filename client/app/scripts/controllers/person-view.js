'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PersonViewCtrl
 * @description
 * # PersonViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieViewCtrl', function (
  $scope,
  $routeParams,
  Person
) {
  $scope.viewPerson = true;
  $scope.person = Person.one($routeParams.id).get().$object;
});
