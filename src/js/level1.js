var Level1 = function() {

  var _platformPositions = [
    [0, 584],
    [200, 584],
    [400, 584],
    [750, 584],
    [950, 584],
    [1150, 584],
    [1500, 584],
    [1700, 584],
    [1900, 584],
    [2150, 550],
    [2350, 550],
    [2650, 400],
    [2950, 250],
    [3400, 584],
    [3600, 584],
    [3800, 584],
  ];

  this.start = function() {
    _setAssets();

    for (var i in _platformPositions) {
      var pos = _platformPositions[i];
      console.log(pos);
      Crafty.e('Platform').attr({x: pos[0], y: pos[1]});
    }
  };

  var _setAssets = function() {
    Crafty.sprite('assets/images/box.png', {
      platform: [0, 0, 200, 16]
    });
  };

  /*Crafty.bind('EnterFrame', function(frame) {
    if (_intervalIndex < _platformInterval - 1 && frame.frame == _platformIterval[_intervalIndex]) {
      Crafty.e('Platform');
      _intervalIndex++;
    }
  });*/
};
