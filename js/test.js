
    group('Transformations');

    test('Translation', function($box) { $box.transition({ x: 20, y: 20 }); });
    test('Rotate', function($box) { $box.transition({ rotate: 45 }); });
    test('Rotate via string', function($box) { $box.transition({ rotate: '45deg' }); });
    test('Skew X', function($box) { $box.transition({ skewX: 30 }); });
    test('Skew Y', function($box) { $box.transition({ skewY: 30 }); });
    test('Skew XY', function($box) { $box.transition({ skewY: 30, skewX: 30 }); });
    test('Scale up', function($box) { $box.transition({ scale: 2 }); });
    test('Scale down', function($box) { $box.transition({ scale: 0.5 }); });

    group('3D transformations');

    test('Rotate X', function($box) {
      $box.transition({
        perspective: '500px',
        rotateX: 180
      });
    });

    test('Rotate Y', function($box) {
      $box.transition({
        perspective: '500px',
        rotateY: 180
      });
    });

    test('Rotate X/Y', function($box) {
      $box.transition({
        perspective: '500px',
        rotateX: 180,
        rotateY: 180
      });
    });


    group('Params');

    test('Delay', function($box) {
      $box.transition({ rotate: 45, delay: 150 });
    });

    test('Delay zero', function($box) {
      $box
        .transition({ x: 50, delay: 0 })
        .transition({ x: 0 });
    });

    test('Ease (should be snappy)', function($box) {
      $box.transition(
        { x: 100 }, 500,
        'cubic-bezier(0,0.9,0.3,1)');
    });

    group('Chaining');

    test('Queueing', function($box) {
      $box
      .transition({ x: 50 })
      .transition({ x: 0 })
      .transition({ y: 50 })
      .transition({ y: 0 });
    });

    test('Duration 0 (should not flicker)', function($box) {
      $box
      .transition({ x: 50 }, 0)
      .transition({ x: 0 }, 0)
      .transition({ y: 50 }, 0);
    });

    group('Callbacks');

    test('2nd param', function($box) {
      $box.transition(
        { rotate: 45 },
        function() { $box.html('OK'); });
    });

    test('3rd param', function($box) {
      $box.transition(
        { rotate: 45 },
        500,
        function() { $box.html('OK'); });
    });

    test('as "complete"', function($box) {
      $box.transition({
        rotate: 45,
        complete: function() { $box.html('OK'); }
      });
    });

    group('Misc');

    test('CSS with Transition', function($box) {
      $box
        .css({ x: -50 })
        .transition({ x: 50 });
    });

    test('Opacity', function($box) {
      $box
        .transition({ opacity: 0 });
    });

    test('Transition of transform (no jump first time)', function($box) {
      $box
        .transition({ transform: "translateX(80px)" });
    });


  