Crafty.c('Foreground', {

  _speed: 2,

  init: function() {
    this.requires('Renderable')
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