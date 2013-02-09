describe('Auto Complete Integration', function () {
  beforeEach(function () {
    setFixtures('<form><input id="mySearch" type="text" /><div id="mySearchSuggestions" /></form>');
    jasmine.Ajax.useMock();
    search.autoComplete($('#mySearch'), $('#mySearchSuggestions'));
  });

  describe('when there are matching words', function () {
    describe('when typing', function () {
      beforeEach(function () {
        $('#mySearch').val('ora').trigger('keyup');
        mostRecentAjaxRequest().response({
          status: 200,
          responseText: '["orange", "oranges"]'
        });
      });

      it('should have suggestions', function () {
        expect($('#mySearchSuggestions li').length).toEqual(2);
      });
    });
  });
});
