'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('SubmissionCtrl', function (
  $scope,
  Submission,
  $location
) {
  $scope.submission = {};
  $scope.saveSubmission = function() {
    Submission.post($scope.submission).then(function() {
      $location.path('/submission');
    });
  };
});

