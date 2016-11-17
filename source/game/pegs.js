PegFactory = function(game) {

return {
  // Creation of the pegs.
  createPeg: function(type, row, column) {
    switch(type) {
      case "standard":
        newPeg = new StandardBall(game, row, column);
        break;
    }

    game.physics.p2.enable(newPeg);
    newPeg.body.loadPolygon("standardBallPhysics", "standardBall");
    newPeg.body.static = true;
    newPeg.body.immovable = true;
    newPeg.body.moves = false;

    return newPeg;
   }
  }
}

StandardBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, 50 * row, 50 * column, "standardBall");
}

StandardBall.prototype = Object.create(Phaser.Sprite.prototype);
StandardBall.prototype.constructor = StandardBall;