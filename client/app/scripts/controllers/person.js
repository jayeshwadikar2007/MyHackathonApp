'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PersonCtrl', function ($scope, Person) {
    $scope.persons = Person.getList().$object;
  });
