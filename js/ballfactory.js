BallFactory = function(game, selectedDifficulty) {

    // Creation of the balls.
    this.createBall = function(row, column) {
      type = pickBall();

      switch (type) {
        case "standard":
          newBall      = new StandardBall(game, row, column);
          newBall.type = "standardBall";
          game.physics.p2.enable(newBall);
          break;
        case "multiplier":
          newBall      = new MultiplierBall(game, row, column);
          newBall.type = "multiplierBall";
          game.physics.p2.enable(newBall);
          break;
        case "danger":
          newBall      = new DangerBall(game, row, column);
          newBall.type = "dangerBall";
          game.physics.p2.enable(newBall);
          break;
        case "subtract":
          newBall      = new SubtractBall(game, row, column);
          newBall.type = "subtractBall";
          game.physics.p2.enable(newBall);
          break;
        case "placer":
          newBall      = new PlacerBall(game, row, column);
          newBall.type = "placerBall";
          game.physics.p2.enable(newBall);
          break;
      }

      // Set the physics on the object.
      newBall.body.clearShapes();
      newBall.body.loadPolygon("ballPhysics", "ball");
      newBall.body.static = true;
      return newBall;
    },

        // Pick which type of ball
    pickBall = function() {
      var standard, multiplier, danger, subtract, placer;

      switch(selectedDifficulty) {
        case "easy":
          standard   = .70;
          multiplier = .80;
          danger     = .85;
          subtract   = .90;
          placer     = .99;
          break;
        case "medium":
          standard   = .75;
          multiplier = .82;
          danger     = .87;
          subtract   = .90;
          placer     = .99;
          break;
        case "hard":
          standard   = .50;
          multiplier = .55;
          danger     = .75;
          subtract   = .92;
          placer     = .99;
          break;
      }
      generatedNumber = Math.random();

      if (generatedNumber <= standard)
        return "standard";
      if (generatedNumber <= multiplier)
        return "multiplier";
      if (generatedNumber <= danger)
        return "danger";
      if (generatedNumber <= subtract)
        return "subtract";
      else
        return "placer";
    }
};

Phaser.Sprite.prototype.recentCollision = false;

StandardBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, row, column, "standardBall");
};

StandardBall.prototype             = Object.create(Phaser.Sprite.prototype);
StandardBall.prototype.constructor = StandardBall;

DangerBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, row, column, "dangerBall");
};

DangerBall.prototype             = Object.create(Phaser.Sprite.prototype);
DangerBall.prototype.constructor = DangerBall;

MultiplierBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, row, column, "multiplierBall");
};

MultiplierBall.prototype             = Object.create(Phaser.Sprite.prototype);
MultiplierBall.prototype.constructor = MultiplierBall;

SubtractBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, row, column, "subtractBall");
};

SubtractBall.prototype             = Object.create(Phaser.Sprite.prototype);
SubtractBall.prototype.constructor = SubtractBall;

PlacerBall = function(game, row, column) {
  Phaser.Sprite.call(this, game, row, column, "placerBall");
};

PlacerBall.prototype             = Object.create(Phaser.Sprite.prototype);
PlacerBall.prototype.constructor = PlacerBall;