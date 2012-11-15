Crafty.c('KeyboardControls', {
  init: function() {
    this.requires('Twoway, Keyboard')
        .bind('KeyDown', function() {
          if (this.isDown('SPACE')) {
            this.trigger('Clap');
          }
        });
    return this;
  }
});

Crafty.c('AudioControl', {
  init: function() {
    
  }
});
