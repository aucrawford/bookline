angular.module('timelineApp');

.factory('characters', ['$resource', function($resource) {
  return $resource('characters/characters.json', {}, {
    quary: {method:'GET', params:{}, isArray:true}
  });
}]);