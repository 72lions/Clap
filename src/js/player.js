Crafty.c('Player', {
    init: function() {
        this.requires('Renderable, ViewportBounded, Collision, PlatformerGravity')
        ._setup()
        // set sprite
        .spriteName('mainPlayer')
        // set starting position
        .attr({ x: 100, y: 200 })
        // set platform-style controller up with walk + jump speeds
        //.platformerControls(5, 8)
        // enable gravity, stop when we hit 'Platform' components
        // FIX: colide with whaattt?!
        .platformerGravity('Platform')
        // enable collision (not used by platformer gravity/controls but would be useful for other things)
        .collision();
    },

    _setup: function() {
        Crafty.sprite(70, 124, 'assets/images/man.png', {
            mainPlayer: [0, 0]
        });
        return this;
    }
});