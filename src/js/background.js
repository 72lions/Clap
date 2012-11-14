Crafty.c('Background', {
  init: function() {
    this.requires('Renderable')
      .spriteName('background');
    //Crafty.background('url(assets/images/game-background.png) repeat-x');
  }
});

Crafty.c('RepeatedBackground', {
  _current: null,
  _next: null,
  _width: 1500,
  _numberOfTiles: 0,

  init: function() {
    this._current = Crafty.e('Background').attr({x: 0, y: 0, w: this._width, h: 700, z: -100});
    this._numberOfTiles = 1;
    this.bind('EnterFrame', this._onEnterFrame);
  },

  _onEnterFrame: function() {

  }
});
