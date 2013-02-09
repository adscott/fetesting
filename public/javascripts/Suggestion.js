n('search', function (ns) {
  ns.Suggestion = function (value, originalInput) {
    this.toHtml = function () {
      var text = value;
      if(originalInput) {
        text = '<b>' + originalInput + '</b>' + value.substr(originalInput.length);
      }
      return '<li><a href="#" class="suggestion">' + text + '</a></li>';
    }
  };
});
