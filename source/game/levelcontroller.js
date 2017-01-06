// Function to create the level (pass in a number to determine which level is going to be chosen)
LevelController = function(game, collisionController, scoreController, selectedLevel, ballFactory) {

    // Create the level.
    this.createLevel = function() {
      addStaticSprites();
      generateLevel();
      addButtons();
    }

    // Create the player ball, but do not add it.
    this.createPlayerBall = function() {
        this.gameBall      = new GameBall(game, 0.3);
        this.gameBall.type = "gameBall";

        this.gameBall.events.onKilled.add(ballKilled, this);
        collisionController.addToCollisionGroup(this.gameBall);

        this.gameBall.checkWorldBounds = true;
        this.gameBall.outOfBoundsKill  = true;

        game.add.existing(this.gameBall);
    }

    // The ball has been destroyed
    ballKilled = function(ball) {
      // Reset physics.
      game.physics.p2.gravity.y   = 500;
      game.state.states["playing"].activeBall = false;
    }

    // Called on the click event.
    returnButtonClick = function() {
      game.state.start("menu");
    }

    // Add the buttons on the game.
    addButtons = function() {
      game.add.button(25, 25, "returnButton", returnButtonClick, this);
    }

    // Add the sprites that will not be altered during play.
    addStaticSprites = function() {
      game.add.sprite(0, 0, "playBackground");

      cannon = game.add.sprite(game.world.centerX, 0, "cannon");
      cannon.anchor.setTo(0.5, 0.5);
    }

    // Generate the full level.
    generateLevel = function() {
      var levelLayout = levels.getLevelLayout(selectedLevel);

      var topBuffer            = (game.height / 100) * 12;
      var verticalSpacing      = (game.height / 100) * 5;
      var verticalSpacingIndex = 0;

      levelLayout.forEach(function(value, index) {
        for(i = 1; i <= value; i++)
        {
          var horizontalSpacing = (game.width) / (value + 1);
          var ball              = ballFactory.createBall(i * horizontalSpacing, topBuffer + (index * verticalSpacing));
          collisionController.addToCollisionGroup(ball);

          game.add.existing(ball);
        }
        verticalSpacingIndex++;
      });
    }
};