'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('QuestionCtrl', function ($scope,Question) {
    $scope.questions = Question.getList().$object;

  });
