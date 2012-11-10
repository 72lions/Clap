Crafty.c('Player', {
    init: function() {
        this.requires('Renderable, ViewportLocked, Collision, PlatformerGravity, PlatformerControls')

        ._setup()
        // set sprite
        .spriteName('mainPlayer')
        // set platform-style controller up with walk + jump speeds
        .platformerControls(5, 8)
        // enable gravity, stop when we hit 'Platform' components
        // FIX: colide with whaattt?!
        .platformerGravity('Platform')
        // enable collision (not used by platformer gravity/controls but would be useful for other things)
        .collision();

        this.bind('EnterFrame', function() {
            this.x = this.x + 2;
        });
    },

    _setup: function() {
        Crafty.sprite(70, 124, 'assets/images/man.png', {
            mainPlayer: [0, 0]
        });
        return this;
    }
});