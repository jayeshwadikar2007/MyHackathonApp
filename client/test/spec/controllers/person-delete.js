'use strict';

describe('Controller: PersonDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PersonDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonDeleteCtrl = $controller('PersonDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
