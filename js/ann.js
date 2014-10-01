(function() {
  $('.anns-wrapper').on('mouseenter', '.aniwrap', function() {
    $(this)
      .removeAttr('style')
      .transition( {rotate: '360deg' } );
  } );

  $('.ann-image').on({
  	mouseenter: function() {
  		$(this).transition( {scale: '1.2' } );
  	}, mouseleave: function() {
  		$(this).removeAttr('style');
  	}
  } );

  $('p.intro1').load( 'aboutme.html .annintro');

} ) ();