'use strict';

describe('Controller: PersonViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PersonViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonViewCtrl = $controller('PersonViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonViewCtrl.awesomeThings.length).toBe(3);
  });
});
