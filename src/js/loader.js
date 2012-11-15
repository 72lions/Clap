var Levels = {
  level1: function() {
    Crafty.scene('Level1');
  }
};

Crafty.scene('loader', 
  function() {
    console.log('Creating Loading Scene...');
    var _loading = Crafty.e('2D, Canvas, Text, Delay');
    _loading.attr({
      x: 462,
      y: 374,
      w: 100,
      h: 20
    });

    Crafty.load([
      'assets/images/box.png',
      'assets/images/man.png',
      'assets/images/start-screen.png',
      'assets/sounds/jump.mp3',
      'assets/sounds/jump.ogg',
      'assets/sounds/jump.wav'
    ],
    function() {
      console.log('Assets Loaded');
      //_loading.text('Clap your hands to start the game!');
      Crafty.background('url(assets/images/start-screen.png)');
    },

    function(progress) {
      console.log('On progress...');
    },

    function() {
      console.log('On error...');
      _loading.text('Dude!! Error!');
    });

    Crafty.bind('Clap', Levels.level1);
  },
  function() {
    Crafty.unbind('Clap', Levels.level1);
  }
);
