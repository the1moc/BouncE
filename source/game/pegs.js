PegFactory = function(game) {

  return {
    // Creation of the pegs.
    createPeg: function(type, row, column) {
      switch (type) {
        case "standard":
          newPeg = new StandardBall(game, row, column);
          game.physics.p2.enable(newPeg);
          break;
      }

      // Set the physics on the object.
      newPeg.body.clearShapes();
      newPeg.body.loadPolygon("ballPhysics", "ball");
      newPeg.body.static = true;
      return newPeg;
    }
  };
};

StandardBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, 25 + (100 * row), 150 + (150 * column), "standardBall");
  this.recentCollision = false;
};

StandardBall.prototype = Object.create(Phaser.Sprite.prototype);
StandardBall.prototype.constructor = StandardBall;