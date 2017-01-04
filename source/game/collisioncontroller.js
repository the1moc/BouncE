// Control all collisions and their effects
CollisionController = function(game, soundPlayer, scoreController, ballFactory) {

    var playerBallCollisionGroup;
    var standardBallCollisionGroup;

    // Create the collision groups
    this.createCollisionGroups = function() {
      playerBallCollisionGroup     = game.physics.p2.createCollisionGroup();
      standardBallCollisionGroup   = game.physics.p2.createCollisionGroup();
      subtractBallCollisionGroup   = game.physics.p2.createCollisionGroup();
      multiplierBallCollisionGroup = game.physics.p2.createCollisionGroup();
      dangerBallCollisionGroup     = game.physics.p2.createCollisionGroup();
      placerBallCollisionGroup     = game.physics.p2.createCollisionGroup();
    }

    // Add to a collision group
    this.addToCollisionGroup = function(ball) {
      switch(ball.type) {
        case "gameBall":
          ball.body.setCollisionGroup(playerBallCollisionGroup);
          ball.body.collides(standardBallCollisionGroup, standardCollision, this);
          ball.body.collides(subtractBallCollisionGroup, subtractCollision, this);
          ball.body.collides(multiplierBallCollisionGroup, multiplierCollision, this);
          ball.body.collides(dangerBallCollisionGroup, dangerCollision, this);
          ball.body.collides(placerBallCollisionGroup, placerCollision, this);
          break;
        case "standardBall":
          ball.body.setCollisionGroup(standardBallCollisionGroup);
          ball.body.collides(playerBallCollisionGroup);
          break;
        case "subtractBall":
          ball.body.setCollisionGroup(subtractBallCollisionGroup);
          ball.body.collides(playerBallCollisionGroup);
          break;
        case "multiplierBall":
          ball.body.setCollisionGroup(multiplierBallCollisionGroup);
          ball.body.collides(playerBallCollisionGroup);
          break;
        case "dangerBall":
          ball.body.setCollisionGroup(dangerBallCollisionGroup);
          ball.body.collides(playerBallCollisionGroup);
          break;
        case "placerBall":
          ball.body.setCollisionGroup(placerBallCollisionGroup);
          ball.body.collides(playerBallCollisionGroup);
          break;
      }
    }

    // Replace the hit ball with a new one.
    this.replaceBall = function(ball) {
      var _this = this;

        setTimeout(function() {
          ball.sprite.recentCollision = false;
          ball.sprite.destroy();
          ball = ballFactory.createBall(ball.x, ball.y);
          _this.addToCollisionGroup(ball);
          game.add.existing(ball);
        }, 500);
    }

    // Collision with a standard ball
    standardCollision = function(gameBall, hitBall) {
      if (!hitBall.sprite.recentCollision)
      {
        soundPlayer.standardCollideSound();

        scoreController.addToScore();
        scoreController.updateScoreText();

        hitBall.sprite.recentCollision = true;
        hitBall.sprite.loadTexture("deactivatedBall");

        this.replaceBall(hitBall);
      }
    }

    // Collision with a standard ball
    subtractCollision = function(gameBall, hitBall) {
      if (!hitBall.sprite.recentCollision)
      {
        soundPlayer.subtractCollideSound();

        scoreController.decreaseScore();
        scoreController.updateScoreText();

        hitBall.sprite.recentCollision = true;
        hitBall.sprite.loadTexture("deactivatedBall");

        this.replaceBall(hitBall);
      }
    }

        // Collision with a standard ball
    dangerCollision = function(gameBall, hitBall) {
      if (!hitBall.sprite.recentCollision)
      {
        soundPlayer.dangerCollideSound();

        game.physics.p2.gravity.y += 200;

        hitBall.sprite.recentCollision = true;
        hitBall.sprite.loadTexture("deactivatedBall");

        this.replaceBall(hitBall);
      }
    }

            // Collision with a standard ball
    multiplierCollision = function(gameBall, hitBall) {
      if (!hitBall.sprite.recentCollision)
      {
        soundPlayer.multiplierCollideSound();

        scoreController.multiplyScore();
        scoreController.updateScoreText();

        hitBall.sprite.recentCollision = true;
        hitBall.sprite.loadTexture("deactivatedBall");

        this.replaceBall(hitBall);
      }
    }

    // Collision with a standard ball
    placerCollision = function(gameBall, hitBall) {
      if (!hitBall.sprite.recentCollision)
      {
        hitBall.sprite.recentCollision = true;
        hitBall.sprite.loadTexture("deactivatedBall");
        game.input.onDown.add(unpause, self, this, gameBall);
        game.paused = true;

        this.replaceBall(hitBall);
      }
    }

    // Unpause the game if it is paused
    unpause = function(pointer, self, hitBall) {
      if (game.paused)
      {
        gameBall.body.x = game.input.activePointer.x;
        gameBall.body.y = game.input.activePointer.y;
        gameBall.body.setZeroVelocity();
        game.paused = false;
        soundPlayer.placerCollideSound();
      }
    }
};