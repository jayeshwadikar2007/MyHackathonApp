'use strict';

describe('Controller: PersonEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PersonEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonEditCtrl = $controller('PersonEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonEditCtrl.awesomeThings.length).toBe(3);
  });
});
