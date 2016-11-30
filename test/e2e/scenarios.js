'use strict';

describe('timeline App', function(){

  describe('Term list view', function(){

    beforeEach(function(){
      browser.get('index.html');
    });

    it('should filter the terms as a user types into the Glossary search box', function(){
      var termList = element.all(by.repeater('term in terms'));
      var query = element.all(by.model('query'));

      query.sendKeys('head');
      expect(termList.count()).toBe(3);

      query.clear();
      query.sendKeys('human');
      expect(termList.count()).toBe(1);
    });
  });
});
