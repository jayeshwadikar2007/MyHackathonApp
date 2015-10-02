'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/person', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })
      .when('/person-add', {
        templateUrl: 'views/person-add.html',
        controller: 'PersonAddCtrl',
        controllerAs: 'personAdd'
      })
      .when('/person/:id', {
        templateUrl: 'views/person-view.html',
        controller: 'PersonViewCtrl',
        controllerAs: 'personView'
      })
      .when('/person/:id/delete', {
        templateUrl: 'views/person-delete.html',
        controller: 'PersonDeleteCtrl',
        controllerAs: 'personDelete'
      })
      .when('/person/:id/edit', {
        templateUrl: 'views/person-edit.html',
        controller: 'PersonEditCtrl',
        controllerAs: 'personEdit'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupCtrl',
        controllerAs: 'group'
      })
      .when('/rewards', {
        templateUrl: 'views/rewards.html',
        controller: 'RewardsCtrl',
        controllerAs: 'reward'
      })
      .when('/submission', {
        templateUrl: 'views/submission.html',
        controller: 'SubmissionCtrl',
        controllerAs: 'submission'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl',
        controllerAs: 'Result'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('PersonRestangular', function (Restangular) {

    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id : '_id'
      });
    });
  })
  .factory('Person', function (PersonRestangular) {
    return PersonRestangular.service('person');
  })
  .factory('QuestionRestangular', function (Restangular) {

    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id : '_id'
      });
    });
  })
  .factory('Question', function (QuestionRestangular) {
    return QuestionRestangular.service('question');
  })
  .factory('SubmissionRestangular', function (Restangular) {

    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id : '_id'
      });
    });
  })
  .factory('Submission', function (GroupRestangular) {
    return GroupRestangular.service('submission');
  })
  .factory('GroupRestangular', function (Restangular) {

    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id : '_id'
      });
    });
  })
  .factory('Group', function (GroupRestangular) {
    return GroupRestangular.service('group');
  });

