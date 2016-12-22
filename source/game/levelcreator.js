// Function to create the level (pass in a number to determine which level is going to be chosen)
LevelCreator = function(game, sexyNumber) {

  var pegFactory;
  var collisionController;
  var gameBall;

  return {
    // Initialise the physics system.
    initialisePhysics: function() {
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.physics.p2.setImpactEvents(true);
      game.physics.p2.updateBoundsCollisionGroup();
      game.physics.p2.gravity.y   = 1000;
      game.physics.p2.restitution = 0.9;
    },

    // Create the factories.
    createFactories: function() {
      pegFactory          = new PegFactory(game);
      collisionController = new CollisionController(game);
    },

    // Add the buttons on the game.
    addButtons: function() {
      game.add.button(25, 25, "returnButton", this.returnButtonClick, this);
    },

    // Called on the click event.
    returnButtonClick: function() {
      game.state.start("menu");
    },

    // Add the sprites that will not be altered during play.
    addStaticSprites: function() {
      game.add.sprite(0, 0, "playBackground");

      cannon = game.add.sprite(game.world.centerX - 15, 0, "cannon");
      cannon.anchor.setTo(0.5, 0.5);
    },

    // Generate the full level.
    generateLevel: function() {

      this.addLevelObstacles();

      // Add all the pegs for this level.
      for (row = 1; row <= 9; row++) {
        for (column = 1; column <= 9; column++) {
          peg = pegFactory.createPeg("standard", row, column);
          collisionController.addToCollisionGroup(1, peg);

          game.add.existing(peg);
        }
      }
    },

    // Create the player ball, but do not add it.
    createPlayerBall: function() {
        var gameBall = new GameBall(game, 0.3);
        collisionController.addToCollisionGroup(0, gameBall);

        game.add.existing(gameBall);
    },

    // Called to generate the static objects around the map.
    addLevelObstacles: function() {
      // levelStructure = game.add.physicsGroup(Phaser.Physics.P2JS);

      // Clear the current shapes collision areas.
      // leftSide = levelStructure.create(80, 600, "sideBarrier");
      // leftSide.body.clearShapes();

      // Load the new collision detections from the JSON files.
      // leftSide.body.loadPolygon("sideBarrierPhysics", "sideBarrier");
      // leftSide.body.static = true;
    }
  };
};