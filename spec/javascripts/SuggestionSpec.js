describe('search.Suggestion', function () {
  describe('rendering html', function () {
    it('should wrap in an li', function () {
      var suggestion = new search.Suggestion('foo');
      expect(suggestion.toHtml()).toEqual('<li><a href="#" class="suggestion">foo</a></li>');
    })

    it('should highlight the section representing the input term', function () {
      var suggestion = new search.Suggestion('apple', 'app');
      expect(suggestion.toHtml()).toEqual('<li><a href="#" class="suggestion"><b>app</b>le</a></li>');
    });
  })
});
