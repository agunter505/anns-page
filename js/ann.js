(function() {
  $('.anns-wrapper').on('mouseenter', '.aniwrap', function() {
    $(this)
      .removeAttr('style')
      .transition( {rotate: '360deg' } );
  } );
} ) ();
