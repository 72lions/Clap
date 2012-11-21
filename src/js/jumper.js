Crafty.c('Jumper', {
  _jump: 6,

  init: function() {
    this.requires('Keyboard');
  },

  jumper: function(jump) {
    jump = jump || this._jump;

    this.bind('EnterFrame', function() {
      if (this.disableControls) return;
      if (this._up) {
        this.y -= jump;
        this._deltaY = -jump;
        this._falling = true;
      }
    }).bind('Clap', this.jump);

    return this;
  },

  jump: function() {
    Crafty.audio.play('jump');
    this._up = true;
  }
});