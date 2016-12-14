var playingState = {

	// The standard create function.
	create: function() {
		levelCreator = new LevelCreator(game);
		levelCreator.initialisePhysics();

		// Create and populate the level.
		levelCreator.addStaticSprites();
		levelCreator.generateLevel();

		// Add the return button
		levelCreator.addButtons();

		hasBallBeenCreated = false;
	},

	// The standard update function.
	update: function() {

		this.determineCannonRotation();

		if (game.input.activePointer.isDown && !hasBallBeenCreated) {
			this.addPlayerBall();
			hasBallBeenCreated = true;
		}
	},

	// Point the cannon in the direction of the pointer.
	determineCannonRotation: function() {
		// Fix this later on
		var cannonMidPoint = 90;
		var invertedAngle = Math.atan2(game.input.activePointer.x - game.world.centerX, game.input.activePointer.y - cannon.height) * 180 / Math.PI + 90;

		cannon.angle = invertedAngle - ((invertedAngle - cannonMidPoint) * 2);
	},

	// Add the ball that the player will fire
	addPlayerBall: function() {
		var gameBall = new GameBall(game, 50);
	}
};