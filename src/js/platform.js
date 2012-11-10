Crafty.c('Platform', {

  init: function() {
    this.requires('Renderable, ViewportBounded, Collision')
    .spriteName('platform')
    .attr({x: 0, y: 0})
    .collision();

    console.log('Platform is initialized...');
  }

});
