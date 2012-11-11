var Game = function() {

  EventTarget.call(this);

  var _self = this;
  var _loading = null;
  var _audioInput = new AudioInput();
  var player;

  this.initCrafty = function() {
    console.log('Page ready, starting CraftyJS');
    Crafty.init(1024, 700);
    Crafty.canvas.init();
    Crafty.scene('loading');
  };

  var _onLoaded = function() {
    console.log('Assets Loaded');
    Crafty.scene('main');
  };

  var _onProgress = function(progress) {
    console.log('On progress...');
    _loading.text('Loading ' + progress.precent + '% complete');
  };

  var _onError = function() {
    console.log('On error...');
    _loading.text('Dude!! Error!');
  };

  var _jump = function(event) {
    player.jump();
  };

  this.mainScene = function() {
    console.log('Showing the main scene...');

    Crafty.background('url(assets/images/game-background.png)');

    player = Crafty.e('SpriteAnimation', 'Player')
      .animate('PlayerRunning', 0, 0, 7) //setup animation
      .animate('PlayerRunning', 25, -1) // start animation;
      .attr({x: 100, y: 576, w: 70, h: 124})
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        Crafty.unbind('EnterFrame', _self.moveBackground);
      });

    Crafty.bind('EnterFrame', _self.moveBackground);

    var level1 = new Level1();
    level1.start();
  };

  this.moveBackground = function(frame) {
    Crafty.stage.elem.style.backgroundPosition = -frame.frame + "px 0px";
  };

  this.loadingScene = function() {

    console.log('Creating Loading Scene...');
    _loading = Crafty.e('2D, Canvas, Text, Delay');
    _loading.attr({
      x: 462,
      y: 374,
      w: 100,
      h: 20
    });

    Crafty.load([
      'assets/images/box.png',
      'assets/images/game-background.png',
      'assets/images/man.png',
      'assets/images/game-over.png'
    ], _onLoaded, _onProgress, _onError);
  };

  this.init = function() {
    Crafty.scene('loading', this.loadingScene);
    Crafty.scene('main', this.mainScene);
    _audioInput.bind('READY', this.initCrafty);
    _audioInput.bind('JUMP', _jump);
    _audioInput.initialize();
  };
};

// kick off the game when the web page is ready
$(document).ready(function() {

  var game = new Game();
  game.init();

});
