'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GroupsCtrl', function () {
    $scope.questions = 
    [
    	{
    "id": "1",
    "questionText": "What is the value of x when 2x + 3 = 3x – 4  ",
    "option1": "1",
    "option2": "2",
    "option3": "3",
    "option4": "7",
    "correctOption" : "option4",
    "score" : "10"
}];
  });
