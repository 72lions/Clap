Crafty.c('Background', {
  _speed: 1,

  _scrollBackground: function(frame) {
    Crafty.stage.elem.style.backgroundPosition = -frame.frame + 'px 0px';
  },

  init: function() {
  },

  image: function(url) {
    Crafty.background('url(' + url + ')');
    return this;
  },

  scroll: function(speed) {
    this._speed = speed || 1;
    Crafty.bind('EnterFrame', this._scrollBackground);
    return this;
  },

  unload: function() {
    Crafty.unbind('EnterFrame', this._scrollBackground);
    return this;
  }
});
