/****** 追従ヘッダー 20181115 ******/

$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      footerHeight = $('footer').outerHeight(),
      docmentHeight = $(document).height(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed',
      hideClass = 'is-hide';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop(),
        scrollPos = $win.height() + value;

    if ( value > navPos ) {
      if ( docmentHeight - scrollPos <= footerHeight ) {
        $nav.addClass(hideClass);
      } else {
        $nav.removeClass(hideClass);
      }
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});
