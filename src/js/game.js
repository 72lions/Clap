var Game = function() {

  EventTarget.call(this);

  var _self = this;

  this.initCrafty = function() {
    console.log('Page ready, starting CraftyJS');
    Crafty.init(1024, 600);
    //Crafty.canvas.init();
    Crafty.scene('loader');
  };

  this.init = function() {
    var audioInput = new AudioInput();
    audioInput.bind('READY', this.initCrafty);
    audioInput.bind('JUMP', function() {
      Crafty.trigger('Clap');
    });
    audioInput.init();
  };
};

// kick off the game when the web page is ready
$(document).ready(function() {

  var game = new Game();
  game.init();

});
