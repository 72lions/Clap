Crafty.c('Platform', {

  _speed: 2,

  init: function() {
    this.requires('Renderable')
        .spriteName('platform')
        .attr({x: Crafty.viewport.width, y: 584})
        .bind('EnterFrame', function() {
          this.x = this.x - this._speed;
          if (this.x + this.w < 0) {
            this.destroy();
          }
        });
  },

  speed: function(spd) {
    this._speed = spd;
    return this;
  }

});
