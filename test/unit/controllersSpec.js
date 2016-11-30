'use strict';

/* jasmine specs for controllers go here */
describe('Timeline controllers', function() {

  // chapters
  describe('ChaptersCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('timelineApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('chapters/chapters.json').respond([{title: 'The Village'}, {title: 'The Madness'}]);
      scope = $rootScope.$new();
      ctrl = $controller('ChaptersCtrl', {$scope: scope});
    }));

    it('shoud create a "chapters" model with 2 chapters fetched from xhr', function() {
      expect(scope.chapters).toBeUndefined();
      $httpBackend.flush();

      expect (scope.chapters).toEqual([{title: 'The Village'}, {title: 'The Madness'}]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('order');
    });
  });

  // characters
  describe('CharactersCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('timelineApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('characters/characters.json').respond([{name: 'Ahlren'}, {name: 'Pear'}]);
      scope = $rootScope.$new();
      ctrl = $controller('CharactersCtrl', {$scope: scope});
    }));

    it('should create a "characters" model with 2 characters fetched from xhr', function() {
      expect(scope.characters).toBeUndefined();
      $httpBackend.flush();

      expect(scope.characters).toEqual([{name: "Ahlren"}, {name: "Pear"}]);
    });
  });

  // glossary
  describe('TermsCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('timelineApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('terms/terms.json').respond([{phrase: "Bok"}, {phrase: "Bokho"}]);
      scope = $rootScope.$new();
      ctrl = $controller('TermsCtrl', {$scope: scope});
    }));

    it('should create a "glossary" model with 2 terms fetched from xhr', function() {
      expect(scope.terms).toBeUndefined();
      $httpBackend.flush();

      expect(scope.terms).toEqual([{phrase: "Bok"}, {phrase: "Bokho"}]);
    });
  });
});