Crafty.scene('gameOver', 
  function() {
    console.log('Game Over man!');
    Crafty.background('url(assets/images/game-over.png)');
    Crafty.bind('Clap', Levels.level1);
  },
  function() {
    Crafty.unbind('Clap', Levels.level1);
  }
);
