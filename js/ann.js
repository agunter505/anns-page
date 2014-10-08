(function() {

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


/*
Functions for animated squares on projects page
*/

(function() {

  /*sets size of grid on click of set button*/
  $("#setSize").on('change', function(event) {

    /*declare variables and set counter*/
    var annSquare = $(".annSquare");
      firstSquare = $(".firstSquare");
      setSize = $("#setSize");
      parentDiv = $('#parentDiv');
      counter = setSize.val();

    /*reset the area by removing divs*/
    annSquare.remove();
    firstSquare.remove();

    /*i sets columns and j sets rows*/
    for (i = 0; i < counter; i++) {
      for (j = 0; j < counter; j++) {
        if (j === 0) {
        parentDiv.append("<div class='firstSquare anisquare'>");
        } else {
        parentDiv.append("<div class='annSquare anisquare'>");
        };
      };
    };
  });
}) ();


/*all functions related to animation of squares on project page*/
(function() {

  /*on click of anibutton runs getAnimation function, which sets the animation of the squares based on the selected radio button*/
  $(".anibutton").on('click', getAnimation);

  function getAnimation() {
    /*gets the selected radio button*/
    var selected = $("input[type='radio'][name='anitype']:checked");

    /* switch statement controlled by the value of the selected radio button*/
    switch (selected.val()) {
      case "spin":
        /*calls spin function*/
        spin();
        break;
      case "hFlip":
        /*calls hflip function*/
        hFlip();
        break;
      case "vFlip":
        /*calls vflip function*/
        vFlip();
        break;
      default:
        break;
    };
  };

  function spin() {
    /*removes mouseenter bind*/
    $("#parentDiv").off('mouseenter');
    /*spins squares on mouseenter and resets other transitions*/
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {rotate: '360deg', perspective: '0px', rotateX:'0deg', rotateY:'0deg'} )
    } );
  };

  function hFlip() {
    /*removes mouseenter bind*/
    $("#parentDiv").off('mouseenter');
    /*flips squares on the x axis on mouseenter and resets other transitions*/
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {perspective: '100px', rotateX:'180deg', rotateY:'0deg', rotate:'0deg' } )
    } );
  };

  function vFlip() {
    /*removes mouseenter bind*/
    $("#parentDiv").off('mouseenter');
    /*flips squares on the y axis on mouseenter and resets other transitions*/
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {perspective: '100px', rotateY:'180deg', rotateX:'0deg', rotate:'0deg' } )
    } );
  };
}) ();

