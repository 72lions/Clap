Crafty.c('PlatformerGravity', {

  _gravityConst: 0.2,
  _gy: 0,
  _falling: true,
  _anti: null,
  _deltaX: 0,
  _deltaY: 0,

  init: function() {
    this.requires('2D');
  },

  /**
  * #.gravity
  * @param {object} comp The name of a component that will stop this entity from falling.
  *
  * Enable gravity for this entity no matter whether comp parameter is not specified,
  * If comp parameter is specified all entities with that component will stop this entity from falling.
  * For a player entity in a platform game this would be a component that is added to all entities
  * that the player should be able to walk on.
  *
  * Example
  * ~~~
  * Crafty.e("2D, DOM, Color, Gravity")
  *    .color("red")
  *    .attr({ w: 100, h: 100 })
  *    .gravity("platform")
  * ~~~
  */
  platformerGravity: function(comp) {
    if (comp) this._anti = comp;

    this.bind('EnterFrame', this._enterFrame);

    return this;
  },

  /**
  * #.gravityConst
  * @param {Number} g Gravitational constant.
  *
  * Set the gravitational constant to g. The default is .2. The greater g, the faster the object falls.
  *
  * Example
  * ~~~
  * Crafty.e("2D, DOM, Color, Gravity")
  *   .color("red")
  *   .attr({ w: 100, h: 100 })
  *   .gravity("platform")
  *   .gravityConst(2)
  * ~~~
  */
  gravityConst: function(g) {
    this._gravityConst = g;
    return this;
  },

  _enterFrame: function() {
    if (this._falling) {
      //if falling, move the players Y
      this._gy += this._gravityConst;
      this.y += this._gy;
      this._deltaY += this._gy;
    } else {
      this._gy = 0; //reset change in y
    }

    var obj, hit = false, pos = this.pos(), q, i = 0, l;

    //Increase by 1 to make sure map.search() finds the floor
    pos._y++;

    //map.search wants _x and intersect wants x...
    pos.x = pos._x;
    pos.y = pos._y;
    pos.w = pos._w;
    pos.h = pos._h;

    q = Crafty.map.search(pos);
    l = q.length;

    for (; i < l; ++i) {
      obj = q[i];
      //check for an intersection directly below the player
      if (obj !== this && obj.has(this._anti) && obj.intersect(pos)) {
        hit = obj;
        break;
      }
    }

    if (hit) { //stop falling if found
      if (this._falling) this.stopFalling(hit);
    } else {
      this._falling = true; //keep falling otherwise
    }

    this._deltaX = 0;
    this._deltaY = 0;
  },

  stopFalling: function(e) {
    //this._gy = -1 * this._bounce;
    this._falling = false;
    if (this._up) this._up = false;
    if (e) {
      if (e._y > this.y) {
        // hit top of platform
        this.y = e._y - this._h; //move object
      } else {
        // hit bottom of platform
        this.y = e._y + e._h;
        this._gy = 0;
        this._falling = true;
      }
    }

    this.trigger('hit');
  },

  antigravity: function() {
    this.unbind('EnterFrame', this._enterFrame);
  }
});
