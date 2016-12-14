// Function to create the level (pass in a number to determine which level is going to be chosen)
LevelCreator = function(game, sexyNumber) {

  return {
    // Initialise the physics system.
    initialisePhysics: function() {
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.physics.p2.gravity.y = 2000;
      game.physics.p2.restitution = 0.9;
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

      pegFactory = new PegFactory(game);

      // Add all the pegs for this level.
      for (row = 1; row <= 9; row++) {
        for (column = 1; column <= 9; column++) {
          game.add.existing(pegFactory.createPeg("standard", row, column));
        }
      }
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