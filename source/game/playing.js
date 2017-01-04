var playingState = {

	init: function() {
		this.selectedLevel      = this.game.state.states["menu"].selectedLevel;
		this.selectedDifficulty = this.game.state.states["menu"].selectedDifficulty;
		this.hasBallBeenCreated = false;
	},

	// The standard create function.
	create: function() {
		// Initialise the physics first.
		this.initialisePhysics();
		game.physics.p2.setBounds(0, 0, game.width, game.height, true, true, true, false, true);

		// Create the controllers and factories.
		this.scoreController     = new ScoreController(game);
		this.soundController     = new SoundController(game);
		this.ballFactory         = new BallFactory(game, this.selectedDifficulty);
		this.collisionController = new CollisionController(game, this.soundController, this.scoreController, this.ballFactory);
		this.levelController     = new LevelController(game, this.collisionController, this.scoreController, this.selectedLevel, this.ballFactory);

		this.collisionController.createCollisionGroups();
		this.levelController.createLevel();
		this.scoreController.createScore();

		ballsRemaining     = 3;
	},

	// The standard update function.
	update: function() {
		this.determineCannonRotation();

		if (game.input.activePointer.isDown && !this.hasBallBeenCreated && ballsRemaining > 0) {
			this.levelController.createPlayerBall();
			this.hasBallBeenCreated = true;
			this.soundController.fireSound();

			ballsRemaining--;
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
      game.physics.p2.gravity.y   = 500;
      game.physics.p2.restitution = 0.9;
    }
};