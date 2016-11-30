'use strict';

/* Controllers */

angular.module('timelineControllers', []);

// timelineControllers.controller('WorkspaceCtrl', function(){});

// timelineControllers.controller('ChaptersCtrl', ['$scope', 'Chapters',
//   function($scope, Chapters) {
//     $scope.chapters = Chapters.query();
//   }
// ]);

// timelineControllers.controller('CharactersCtrl', ['$scope', 'Characters',
//   function($scope, Characters) {
//     $scope.characters = Characters.query();
//   }
// ]);

// timelineControllers.controller('TermsCtrl', ['$scope', 'Terms',
//   function($scope, Terms) {
//     $scope.terms = Terms.query();
//   }
// ]);

// timelineControllers.controller('TimelinesCtrl', ['$scope', 'Timelines', 'Characters',
//   function($scope, Timelines, Characters) {
//     $scope.tilmelines = Timelines.query();
//     $scope.characters = Characters.query();
//   }
// ]);




// var timelineApp = angular.module('timelineApp', ['timelineCharacters']);


// // characters
// timelineApp.controller('TimelineCharacterCtrl', ['$scope', '$http', function($scope, $http) {
//     $http.get('characters/characters.json').success(function(data) {
//       $scope.characters = data;
//     });
// }]);

// // chapters
// timelineApp.controller('TimelineChapterCtrl', ['$scope', '$http', function($scope, $http) {
//   $http.get('chapters/chapters.json').success(function(data) {
//     $scope.chapters = data;
//   });

//   $scope.orderProp = 'order';
// }]);

// // glossary
// timelineApp.controller('TimelineGlossaryCtrl', ['$scope', '$http', function($scope, $http) {
//   $http.get('glossary/terms.json').success(function(data) {
//     $scope.terms = data;
//   });
// }]);