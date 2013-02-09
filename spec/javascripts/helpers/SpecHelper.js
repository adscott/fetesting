(function ($) {
  $.fn.extend({
    drive: function (val) {
      return this.each(function () {
        $(this).focus().val(val).trigger('change').trigger('blur');
      });
    }
  });
}($));
