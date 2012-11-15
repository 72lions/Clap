Crafty.c('Player', {
  init: function() {
    var _self = this;

    this.requires('Renderable, Collision, PlatformerGravity, PlatformerControls')

        ._setup()
        // set sprite
        .spriteName('mainPlayer')
        // set platform-style controller up with walk + jump speeds
        .platformerControls(5, 8)
        // enable gravity, stop when we hit 'Platform' components
        // FIX: colide with whaattt?!
        .platformerGravity('Platform')
        // enable collision (not used by platformer gravity/controls but would be useful for other things)
        .collision()

        .bind('EnterFrame', function(frame) {
          if (this.y > 700) {
            this.trigger('playerDied');
            this.destroy();
          }
        });

    Crafty.bind('Clap', function() {
      _self.jump();
    });
  },

  _setup: function() {
    Crafty.sprite(70, 124, 'assets/images/man.png', {
      mainPlayer: [0, 0]
    });
    Crafty.audio.add('jump', [
      'assets/sounds/jump.mp3',
      'assets/sounds/jump.ogg',
      'assets/sounds/jump.wav'
    ]);

    return this;
  }
});
