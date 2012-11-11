var Level1 = function() {

	this.start = function() {
		_setAssets();
		_setBackground();

		Crafty.e('Platform').attr({x: 0, y: 684});
		Crafty.e('Platform').attr({x: 200, y: 684});
		Crafty.e('Platform').attr({x: 400, y: 684});
		Crafty.e('Platform').attr({x: 750, y: 684});
		Crafty.e('Platform').attr({x: 950, y: 684});
		Crafty.e('Platform').attr({x: 1150, y: 684});
		Crafty.e('Platform').attr({x: 1500, y: 684});
		Crafty.e('Platform').attr({x: 1700, y: 684});
		Crafty.e('Platform').attr({x: 1900, y: 684});
	};

	var _setAssets = function() {
		Crafty.sprite('assets/images/box.png', {
			platform: [0, 0, 200, 16]
		});
		Crafty.sprite('assets/images/game-background.png', {
			background: [0, 0, 1500, 700]
		});
	};

	var _setBackground = function() {
		Crafty.e('RepeatedBackground').attr({x: 0, y: 0});
	};
};