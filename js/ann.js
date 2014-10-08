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
Functions for building squares on projects page
*/

(function() {

  var parentDiv = $('#parentDiv');

  /*sets size of grid on change of setSize button*/
  $("#setSize").on('change', function(event) {
    /*get value for counter*/
    var rowCounter = $("#setSize").val();
    var colCounter = $("#columns").val();
    /*reset the area by removing divs*/
    $(".annSquare").remove();
    $(".firstSquare").remove();
    /*creates the squares*/
    createSquares(rowCounter, colCounter);
  });

   /*sets size of grid on change of setSize button*/
  $("#columns").on('change', function(event) {
    /*get value for counter*/
    var rowCounter = $("#setSize").val();
    var colCounter = $("#columns").val();
    /*reset the area by removing divs*/
    $(".annSquare").remove();
    $(".firstSquare").remove();
    /*creates the squares*/
    createSquares(rowCounter, colCounter);
  });

  /*function to create squares, i controls rows, j controls columns*/
  function createSquares(rowCounter, colCounter) {
    for (i = 0; i < rowCounter; i++) {
      for (j = 0; j < colCounter; j++) {
        if (j === 0) {
          /*first square of each row given different class for css clearing*/
          parentDiv.append("<div class='firstSquare anisquare'>");
        } else {
          parentDiv.append("<div class='annSquare anisquare'>");
        };
      };
    };
  }

}) ();

/*
Functions for animating squares on projects page
*/

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

