'use strict';

describe('Controller: PersonAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PersonAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonAddCtrl = $controller('PersonAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonAddCtrl.awesomeThings.length).toBe(3);
  });
});
