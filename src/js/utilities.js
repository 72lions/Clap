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

// Use this to lock the viewport to an entity
Crafty.c('ViewportLocked', {
  init: function() {
    Crafty.viewport.follow(this, 100 - Crafty.viewport.width / 2, Crafty.viewport.height / 2 - this.height);
  }
});
