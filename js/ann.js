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

  function doggy( picID, picA, picB, period) {
    var picElem = document.getElementById( picID ), state = false;

    function f() {
      picElem.src = ( state ^= true ) ? picB : picA ;
    }

    setInterval( f, period );
  }

  doggy( 'doggypics', 'img/doggy1.jpg', 'img/doggy2.jpg', 250);

} ) ();