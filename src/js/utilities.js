// a renderable entity
Crafty.c('Renderable', {
    init: function () {
        // we're using DOM Spirtes
        this.requires('2D, DOM');
    },
    // set which sprite to use -- should match up with a call to Crafty.sprite()
    spriteName: function (name) {
        this.requires(name);
        return this; // so we can chain calls to setup functions
    }
});

// Limit movement to within the viewport
Crafty.c('ViewportBounded', {
    init: function () {
        this.requires('2D');
    },
    // this must be called when the element is moved event callback
    checkOutOfBounds: function (oldPosition) {
        if (!this.within(0, 0, Crafty.viewport.width, Crafty.viewport.height)) {
            this.attr({
                x: oldPosition.x,
                y: oldPosition.y
            });
        }
    }
});
