'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GroupCtrl', function ($scope,Group) {
    $scope.groups = Group.getList().$object;

  });
