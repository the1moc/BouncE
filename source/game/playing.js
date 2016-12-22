var playingState = {

	// The standard create function.
	create: function() {
		// Level creator to generate the level
		levelCreator = new LevelCreator(game);
		levelCreator.initialisePhysics();
		levelCreator.createFactories();
		levelCreator.addStaticSprites();
		levelCreator.generateLevel();
		levelCreator.addButtons();

		// Called to play sounds.
		soundPlayer = new SoundPlayer(game);

		hasBallBeenCreated = false;
	},

	// The standard update function.
	update: function() {
		this.determineCannonRotation();

		if (game.input.activePointer.isDown && !hasBallBeenCreated) {
			levelCreator.createPlayerBall();
			hasBallBeenCreated = true;
			soundPlayer.fireSound();
		}
	},

	// Point the cannon in the direction of the pointer.
	determineCannonRotation: function() {
		// Fix this later on
		var cannonMidPoint = 90;
		var invertedAngle = Math.atan2(game.input.activePointer.x - game.world.centerX, game.input.activePointer.y - cannon.height) * 180 / Math.PI + 90;

		cannon.angle = invertedAngle - ((invertedAngle - cannonMidPoint) * 2);
	},
};