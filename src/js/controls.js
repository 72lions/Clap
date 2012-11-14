Crafty.c('PlatformerControls', {
  _speed: 3,
  _up: false,

  init: function() {
    this.requires('Twoway, Keyboard');
  },

  platformerControls: function(speed, jump) {

    if (speed) this._speed = speed;
    jump = jump || this._speed * 2;

    this.bind('EnterFrame', function() {
      if (this.disableControls) return;
      if (this._up) {
        this.y -= jump;
        this._deltaY = -jump;
        this._falling = true;
      }
    }).bind('KeyDown', function() {
      if (this.isDown('SPACE')) this._up = true;
    });

    return this;
  },

  jump: function() {
    this._up = true;
  }
});
