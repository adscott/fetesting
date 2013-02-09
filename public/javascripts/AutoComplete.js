n('search', function (ns) {

  ns.autoComplete = function (input, destination) {
    var parser = function (data) {
      var suggestions = _(data).map(function (text) {
        var suggestion = new search.Suggestion(text, $(input).val());
        return suggestion.toHtml();
      });
      var html = '<ul>' + suggestions.join('') + '</ul>';
      $(destination).html(html);
    };

    var fetcher = function () {
      $.ajax({
        url: '/autocomplete',
        data: {term: $(input).val()},
        success: parser
      });
    };

    $('a.suggestion', destination).live('click', function (e) {
      $(input).val($(e.currentTarget).text());
    });
    $(input).keyup(fetcher);

  };

});

