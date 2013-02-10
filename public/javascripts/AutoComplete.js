n('search', function (ns) {

  ns.autoComplete = function (input, destination) {
    var sequence = 0;
    var parserFor = function (term, fSequence) {
      return function (data) {
        if (fSequence < sequence) {
          return;
        }

        var suggestions = _(data).map(function (text) {
          var suggestion = new search.Suggestion(text, term);
          return suggestion.toHtml();
        });
        var html = '<ul>' + suggestions.join('') + '</ul>';
        $(destination).html(html);
      };
    };

    var fetchSuggestions = function (event) {
      sequence = sequence + 1;
      $.ajax({
        url: '/autocomplete',
        data: {term: $(input).val()},
        success: parserFor($(event.currentTarget).val(), sequence)
      });
    };

    $(input).keyup(fetchSuggestions);
    $('a.suggestion', destination).live('click', function (e) { $(input).val($(e.currentTarget).text()); });
  };
});

