var Level1 = function() {

	this.start = function() {
		_setAssets();

		Crafty.e('Platform').attr({x: 0, y: 684});
		Crafty.e('Platform').attr({x: 200, y: 684});
		Crafty.e('Platform').attr({x: 400, y: 684});
		Crafty.e('Platform').attr({x: 750, y: 684});
		Crafty.e('Platform').attr({x: 950, y: 684});
		Crafty.e('Platform').attr({x: 1150, y: 684});
		Crafty.e('Platform').attr({x: 1500, y: 684});
		Crafty.e('Platform').attr({x: 1700, y: 684});
		Crafty.e('Platform').attr({x: 1900, y: 684});
		Crafty.e('Platform').attr({x: 2150, y: 550});
		Crafty.e('Platform').attr({x: 2350, y: 550});
		Crafty.e('Platform').attr({x: 2650, y: 400});
		Crafty.e('Platform').attr({x: 2950, y: 250});
		Crafty.e('Platform').attr({x: 3250, y: 684});
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