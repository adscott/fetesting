n('search', function (ns) {

  ns.autoComplete = function (input, destination) {
    var parser = function (suggestions) {
      var suggestionsElements = _(suggestions).map(function (suggestion) {
        return '<li>' + suggestion + '</li>';
      });
      var html = '<ul>' + suggestionsElements.join('') + '</ul>';
      $(destination).html(html);
    };

    var fetcher = function () {
      $.ajax({
        url: '/autocomplete',
        data: {term: $(input).val()},
        success: parser
      });
    };

    $(input).keyup(fetcher);
  };

});

