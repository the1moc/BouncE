// Control all collisions and their effects
CollisionController = function(game, soundPlayer, scoreController) {

    var playerBallCollisionGroup;
    var standardBallCollisionGroup;

    // Create the collision groups
    this.createCollisionGroups = function() {
      playerBallCollisionGroup   = game.physics.p2.createCollisionGroup();
      standardBallCollisionGroup = game.physics.p2.createCollisionGroup();
    }

    // Add to a collision group
    this.addToCollisionGroup = function(groupNumber, newItem) {
      switch(groupNumber) {
        case 0:
          newItem.body.setCollisionGroup(playerBallCollisionGroup);
          newItem.body.collides(standardBallCollisionGroup, standardCollision);
          break;
        case 1:
          newItem.body.setCollisionGroup(standardBallCollisionGroup);
          newItem.body.collides(playerBallCollisionGroup);
          break;
      }
    }

    // Collision with a standard ball
    standardCollision = function(gameBall, hitBall) {
      if (!hitBall.sprite.recentCollision)
      {
        soundPlayer.standardCollideSound();

        scoreController.addToScore(1);
        scoreController.updateScoreText();

        hitBall.sprite.recentCollision = true;
        hitBall.sprite.loadTexture("deactivatedBall");

        setTimeout(function() {
          hitBall.sprite.recentCollision = false;
          hitBall.sprite.loadTexture("standardBall");
        }, 500);
      }
    }
};