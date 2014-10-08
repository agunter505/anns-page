(function() {

/*  $('.ann-image').on({
  	mouseenter: function() {
  		$(this).transition( {scale: '1.2' } );
  	}, 
    mouseleave: function() {
  		$(this).removeAttr('style');
  	}
  } );*/

  /*front page doggy animation*/
  function doggy( picID, picA, picB, period) {
    var picElem = document.getElementById( picID ), state = false;
    function f() {
      picElem.src = ( state ^= true ) ? picB : picA ;
    }
    setInterval( f, period );
  }
  /*tests to see if image is on page before running*/
  if ($("#doggypics").length) {
    doggy( 'doggypics', 'img/doggy1.jpg', 'img/doggy2.jpg', 250);
  };

} ) ();


/*for animated squares on projects page*/
(function() {

  /*sets size of grid on click of set button*/
  $("#setSquares").click( function(event) {

    /*declare variables and set counter*/
    var annSquare = $(".annSquare");
      firstSquare = $(".firstSquare");
      message = $("#message");
      setSize = $("#setSize");
      parentDiv = $('#parentDiv');
      counter = setSize.val();

    /*reset the area and message by removing items*/
    annSquare.remove();
    firstSquare.remove();
    message.remove();

    /*prevents button click from reloading page*/
    event.preventDefault();

    /*validate entry to be between one and ten*/
    if ( counter <= 10 && counter >= 1) {

      /*displays the grid size*/
      $("#displayEntry").append("<p id='message'>");
      $("#message").append("You entered " + counter);

      /*adds a row and column for each iteration*/
      for (i = 0; i < counter; i++) {
        for (j = 0; j < counter; j++) {
          if (j === 0) {
          parentDiv.append("<div class='firstSquare anisquare'>");
          } else {
          parentDiv.append("<div class='annSquare anisquare'>");
          };
        };
      };
    } else {
      /*must enter a valid number*/
      alert("Please enter a number between one and ten.");
    };

    /*after running, removes value from text box*/
    setSize.val("");

  });

  /*resets squares on click of reset button*/
  $("#resetSquares").click( function() {

    /*set variables*/
    var annSquare = $(".annSquare");
      firstSquare = $(".firstSquare");
      message = $("#message");
      setSize = $("#setSize");

    /*prevents button click from reloading page*/
    event.preventDefault();
    /*removed all divs added by the button and removes the value from the field*/
    annSquare.remove();
    firstSquare.remove();
    message.remove();
    setSize.val("");
  });

}) ();

(function() {

  function clearout() {
    console.log("clearout called");
    $("#parentDiv").off('mouseenter');
    $(".anisquare")
      .transition( {rotate: '0deg', perspective: '0px', rotateX:'0deg', rotateY:'0deg'} );
  }

  function spin() {
    $("#parentDiv").off('mouseenter');
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {rotate: '360deg', perspective: '0px', rotateX:'0deg', rotateY:'0deg'} )
        console.log("spin running");  /*test script*/
    } );
  }

  function hFlip() {
    $("#parentDiv").off('mouseenter');
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {perspective: '100px', rotateX:'180deg', rotateY:'0deg', rotate:'0deg' } )
        console.log("hFlip running");  /*test script*/;
    } );
  }

  function vFlip() {
    $("#parentDiv").off('mouseenter');
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {perspective: '100px', rotateY:'180deg', rotateX:'0deg', rotate:'0deg' } )
      console.log("vFlip running");  /*test script*/
    } );
  }

  function getAnimation() {

    /*$( "#hidediv" ).hide();*/
    /*$("#resetAnimation").show();
    console.log("hiding");*/
    /*console.log("the value is " + $(".anibutton").attr('id'));*/

    var selected = $("input[type='radio'][name='anitype']:checked");
    console.log("selected value is " + selected.val());

    switch (selected.val()) {
      case "spin":
        console.log("spinning");
        spin();
        break;
      case "hFlip":
        spinbool = false;
        console.log("hflipping");
        hFlip();
        break;
      case "vFlip":
        console.log("vflipping");
        vFlip();
        break;
    };
  }

  $("#resetAnimation").hide();
  $(".anibutton").on('click', getAnimation);

}) ();