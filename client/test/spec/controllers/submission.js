'use strict';

describe('Controller: SubmissionCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SubmissionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmissionCtrl = $controller('SubmissionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubmissionCtrl.awesomeThings.length).toBe(3);
  });
});
