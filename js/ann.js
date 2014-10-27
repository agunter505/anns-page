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
  /*set variables*/
  var parentDiv = $('#parentDiv');
      rows = $("#rows");
      columns = $("#columns");

  /*sets size of grid on change of rows button*/
  rows.on('change', function(event) {
    /*get value for counter*/
    var rowCounter = rows.val();
    var colCounter = columns.val();
    /*reset the area by removing divs, if present, then create squares*/
    removeSquares();
    createSquares(rowCounter, colCounter);
  });

   /*sets size of grid on change of rows button*/
  columns.on('change', function(event) {
    /*get value for counter*/
    var rowCounter = rows.val();
    var colCounter = columns.val();
    /*reset the area by removing divs, if present, then create squares*/
    removeSquares();
    createSquares(rowCounter, colCounter);
  });

  /*function to remove squares*/
  function removeSquares() {
    $(".annSquare").remove();
    $(".firstSquare").remove();
  };

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
  };

  /*
  Functions for animating squares on projects page
  */

  /*on click of a radio button (anibutton), runs getAnimation function, which sets the animation of the squares based on the selected radio button*/
  $(".anibutton").on('click', getAnimation);

  /*gets the selected radio button then uses a switch statement based on the value of the selected radio button and gets the spin, hflip or vflip function*/
  function getAnimation() {  
    var selected = $("input[type='radio'][name='anitype']:checked");
    switch (selected.val()) {
      case "spin":
        spin();
        break;
      case "hFlip":
        hFlip();
        break;
      case "vFlip":
        vFlip();
        break;
      default:
        break;
    };
  };

  /*removes current mouseenter bind then adds one to spins squares on mouseenter. Also resets other transitions*/
  function spin() {  
    parentDiv
      .off('mouseenter')
      .on('mouseenter', '.anisquare', function() {
        $(this)
          .removeAttr('style')
          .transition( {rotate: '360deg', perspective: '0px', rotateX:'0deg', rotateY:'0deg'} )
      } );
  };

  /*removes current mouseenter bind then adds one to flip squares along x axis on mouseenter. Also resets other transitions*/
  function hFlip() {  
    $("#parentDiv").off('mouseenter');
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {perspective: '100px', rotateX:'180deg', rotateY:'0deg', rotate:'0deg' } )
    } );
  };

  /*removes current mouseenter bind then adds one to flip squares along y axis on mouseenter. Also resets other transitions*/
  function vFlip() {
    $("#parentDiv").off('mouseenter');
    $("#parentDiv").on('mouseenter', '.anisquare', function() {
      $(this)
        .removeAttr('style')
        .transition( {perspective: '100px', rotateY:'180deg', rotateX:'0deg', rotate:'0deg' } )
    } );
  };
}) (); /*end function*/
/*end all*/
