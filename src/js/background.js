Crafty.c('Background', {
    init: function() {
    	var _self = this;
   
   		var _onMove = function() {
   			console.log(_self.x);
   		}
    	
		this.requires('2D');
		Crafty.background('url(assets/images/game-background.png) repeat-x');
        _self.bind("KeyDown", function() {
			_self.bind("Move", _onMove);
        });
        _self.bind("KeyUp", function() {
			_self.unbind("Move", _onMove);
		});
    }
});