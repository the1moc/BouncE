// Function to create the level (pass in a number to determine which level is going to be chosen)
LevelController = function(game, collisionController, scoreController) {

  var gameBall;

    // Create the level.
    this.createLevel = function() {
      createFactories();
      addStaticSprites();
      generateLevel();
      addButtons();
    }

    // Create the player ball, but do not add it.
    this.createPlayerBall = function() {
        var gameBall = new GameBall(game, 0.3);
        collisionController.addToCollisionGroup(0, gameBall);

        game.add.existing(gameBall);
    }

    // Called on the click event.
    returnButtonClick = function() {
      game.state.start("menu");
    }

    // Create the factories.
    createFactories = function() {
      pegFactory          = new PegFactory(game);
    }

    // Add the buttons on the game.
    addButtons = function() {
      game.add.button(25, 25, "returnButton", returnButtonClick, this);
    }

    // Add the sprites that will not be altered during play.
    addStaticSprites = function() {
      game.add.sprite(0, 0, "playBackground");

      cannon = game.add.sprite(game.world.centerX - 15, 0, "cannon");
      cannon.anchor.setTo(0.5, 0.5);
    }

    // Generate the full level.
    generateLevel = function() {

      addLevelObstacles();

      // Add all the pegs for this level.
      for (row = 1; row <= 9; row++) {
        for (column = 1; column <= 9; column++) {
          peg = pegFactory.createPeg("standard", row, column);
          collisionController.addToCollisionGroup(1, peg);

          game.add.existing(peg);
        }
      }
    }

    // Called to generate the static objects around the map.
    addLevelObstacles = function() {
      // levelStructure = game.add.physicsGroup(Phaser.Physics.P2JS);

      // Clear the current shapes collision areas.
      // leftSide = levelStructure.create(80, 600, "sideBarrier");
      // leftSide.body.clearShapes();

      // Load the new collision detections from the JSON files.
      // leftSide.body.loadPolygon("sideBarrierPhysics", "sideBarrier");
      // leftSide.body.static = true;
    }
};