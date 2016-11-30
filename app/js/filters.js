'use strict'

/* Filters */
var timelineFilter = angular.module('timelineFilters', []);

timelineFilter.filter('termsFilter', function($filter) {
  return function(object, params) {
    if (!params) {
      return [];
    } else {
      return $filter('filter')(object, params);
    }
  }

});

// timelineFilter.filter('getChapters', function() {
//   $filter('orderBy')(Chapters, )
// });