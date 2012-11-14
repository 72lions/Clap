Crafty.c('Platform', {

  init: function() {
    this.requires('Renderable, Collision')
    .spriteName('platform')
    .attr({x: Crafty.viewport.width, y: 684})
    .collision();

    console.log('Platform is initialized...');

    this.bind('EnterFrame', function() {
      this.x = this.x - 2;
      if (this.x + this.w < 0) {
        this.destroy();
      }
    });
  }

});
