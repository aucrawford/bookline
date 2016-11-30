'use strict';

/* Routes */

angular.module('timelineApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/pages/workspace/index.html'
      // controller: 'WorkspaceCtrl'
    })
    // .when('/characters', {
    //   templateUrl: 'templates/pages/characters/index.html',
    //   controller: 'CharactersCtrl'
    // })
    // .when('/glossary', {
    //   templateUrl: 'templates/pages/glossary/index.html',
    //   controller: 'TermsCtrl'
    // })
    // .when('/timelines', {
    //   templateUrl: 'templates/pages/timelines/index.html',
    //   controller: 'TimelinesCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });
}]);