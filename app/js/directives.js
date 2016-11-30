'use strict';

/* Directives */
var timelineDirective = angular.module('timelineDirectives', []);

// ------------------------------------------------------------------- CHAPTERS
timelineDirective.directive('chapterSort', function(Chapter) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/pages/workspace/chapter-sort.html',
    link: function(scope, element, attrs) {
      scope.chapters = Chapter.quary();
    }
  }
});
timelineDirective.directive('chapterListing', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/pages/workspace/chapter-listing.html',
    scope: {
      chapter: "="
    }
  }
});

// ----------------------------------------------------------------- CHARACTERS
timelineDirective.directive('characterSelect', function(Character) {
  return {
    // replace: true,
    restrict: 'E',
    templateUrl: 'templates/pages/workspace/character-select.html',
    link: function(scope, element, attrs) {
      scope.characters = Character.query();
    }
  };
});
timelineDirective.directive('characterListing', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/pages/workspace/character-listing.html',
    scope: {
      character: "="
    }
  }
});

// -------------------------------------------------------------text_decorationtext_decoration GLOSSARY TERMS
timelineDirective.directive('glossarySearch', function(Term) {
  return {
    // replace: true,
    restrict: 'E',
    templateUrl: 'templates/pages/workspace/glossary-search.html',
    link: function(scope, element, attrs) {
      scope.terms = Term.quary();
    }
  };
});
timelineDirective.directive('glossaryTerms', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/pages/workspace/glossary-terms.html',
    scope: {
      term: '='
    }
  }
});

// timelineDirective.directive('chapterSort', function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/pages/workspace/chapter-sort.html',
//     controller: function($scope, Chapters) {
//       $scope.chapters = Chapters.query();
//     }
//   };
// });

// timelineDirective.directive('writingSurface', function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/pages/workspace/writing-surface.html',
//     controller: function($scope, Chapter) {
//       $scope.chapter = Chapter.query();
//     }
//   };
// });

// timelineDirective.directive('scrub-Bar', function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'pages/workspace/timeline-scrub-bar.hmtl',
//     controller: function($scope, Timelines, Characters) {
//       $scope.tilmelines = Timelines.query();
//       $scope.characters = Characters.query();
//     },
//     controllerAs: 'lines'
//   };
// });