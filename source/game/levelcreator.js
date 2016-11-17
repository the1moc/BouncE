LevelCreator = function(game) {

	return {
	// initialise the physics system
        initialisePhysics: function() {
          game.physics.startSystem(Phaser.Physics.P2JS);
          game.physics.p2.gravity.y = 50;
          game.physics.p2.restitution = 1.0;
        },

        // Add the buttons on the game
        addButtons: function() {
          game.add.button(25, 25, "returnButton", this.returnButtonClick, this);
        },

        // Called on the click event
        returnButtonClick: function() {
          game.state.start("menu");
        },

        // Add the sprites that will not be altered during play
        addStaticSprites: function() {
          game.add.tileSprite(0, 0, game.width, game.height, "playBackground");
         
          cannon = game.add.sprite(game.width / 2, 16, "cannon");
          cannon.anchor.set(0.5, 0.5);
        },

        generateLevel: function() {

          this.createLevel();
          pegFactory = new PegFactory(game);

          for(i = 0; i < 50; i++)
          {
            game.add.existing(pegFactory.createPeg("standard", 1, 2));
          }
        },

        createLevel: function() {
          levelStructure = game.add.physicsGroup(Phaser.Physics.P2JS);
          leftSide = levelStructure.create(80, 600, "sideBarrier");

          // Clear the current shapes collision areas
          leftSide.body.clearShapes();

          // Load the new collision detections from the JSON files
          leftSide.body.loadPolygon("sideBarrierPhysics", "sideBarrier");
          leftSide.body.static = true;
          leftSide.body.immovable = true;
          leftSide.body.moves = false;
        }
    }
}