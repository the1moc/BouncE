var playingState = {

	// The standard create function.
	create: function() {
		// Initialise the physics first.
		this.initialisePhysics();

		// Create the controllers.
		this.scoreController     = new ScoreController(game);
		this.soundController     = new SoundController(game);
		this.collisionController = new CollisionController(game, this.soundController, this.scoreController);
		this.levelController     = new LevelController(game, this.collisionController, this.scoreController);

		this.collisionController.createCollisionGroups();
		this.levelController.createLevel();
		this.scoreController.createScore();

		hasBallBeenCreated = false;
	},

	// The standard update function.
	update: function() {
		this.determineCannonRotation();

		if (game.input.activePointer.isDown && !hasBallBeenCreated) {
			this.levelController.createPlayerBall();
			hasBallBeenCreated = true;
			this.soundController.fireSound();
		}
	},

	// Point the cannon in the direction of the pointer.
	determineCannonRotation: function() {
		// Fix this later on
		var cannonMidPoint = 90;
		var invertedAngle = Math.atan2(game.input.activePointer.x - game.world.centerX, game.input.activePointer.y - cannon.height) * 180 / Math.PI + 90;

		cannon.angle = invertedAngle - ((invertedAngle - cannonMidPoint) * 2);
	},

    // Initialise the physics system.
    initialisePhysics: function() {
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.physics.p2.setImpactEvents(true);
      game.physics.p2.updateBoundsCollisionGroup();
      game.physics.p2.gravity.y   = 1000;
      game.physics.p2.restitution = 0.9;
    }
};