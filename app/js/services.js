'use strict'

/* Services */

var timelineServices = angular.module('timelineServices', ['ngResource']);

// ------------------------------------------------------------------- CHAPTERS
timelineServices.factory('Chapter', function ChapterFactory($resource) {
  return $resource('chapters/chapters.json', {}, {
    quary: {method:'GET', params:{}, isArray:true}
  });
});

// ----------------------------------------------------------------- CHARACTERS
timelineServices.factory('Character', function($resource) {
  return $resource('characters/characters.json', {}, {
    quary: {method:'GET', params:{}, isArray:true}
  });
});

// ------------------------------------------------------------- GLOSSERY TERMS
timelineServices.factory('Term', function($resource) {
  return $resource('terms/terms.json', {}, {
    quary: {method:'GET', params:{}, isArray:true}
  });
});