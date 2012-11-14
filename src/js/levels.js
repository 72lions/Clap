Crafty.scene('Level1', function() {
  console.log('starting level 1');
  Crafty.background('url(assets/images/game-background.png)');

  Crafty.sprite('assets/images/box.png', {
    platform: [0, 0, 200, 16]
  });

  Crafty.e('Platform').attr({x: 0, y: 584});
  Crafty.e('Platform').attr({x: 200, y: 584});
  Crafty.e('Platform').attr({x: 400, y: 584});
  Crafty.e('Platform').attr({x: 750, y: 584});
  Crafty.e('Platform').attr({x: 950, y: 584});
  Crafty.e('Platform').attr({x: 1150, y: 584});
  Crafty.e('Platform').attr({x: 1500, y: 584});
  Crafty.e('Platform').attr({x: 1700, y: 584});
  Crafty.e('Platform').attr({x: 1900, y: 584});

  Crafty.bind('EnterFrame', function(frame) {
    Crafty.stage.elem.style.backgroundPosition = -frame.frame + 'px 0px';
  });
});
