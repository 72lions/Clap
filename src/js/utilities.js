// a renderable entity
Crafty.c('Renderable', {
  init: function() {
    // we're using DOM Spirtes
    this.requires('2D, DOM');
  },
  // set which sprite to use -- should match up with a call to Crafty.sprite()
  spriteName: function(name) {
    this.requires(name);
    return this; // so we can chain calls to setup functions
  }
});

Crafty.c('GameStarter', {
  init: function() {
    this.requires('KeyboardControls')
        .bind('Clap', this._start);
  },

  _start: function() {
    Crafty.scene('Level1');
    this.unbind('Clap', this._start).destroy();
  }
});
