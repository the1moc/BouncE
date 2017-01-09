var playingState = {

	init: function() {
		this.selectedLevel      = this.game.state.states["menu"].selectedLevel;
		this.selectedDifficulty = this.game.state.states["menu"].selectedDifficulty;
		this.activeBall         = false;
		this.currentMode        = "playing";
		this.teleports          = 0;
		this.ballsRemaining     = 3;
		this.teleportDelay      = false;

		// Initialise the physics first.
		this.initialisePhysics();
	},

	// The standard create function.
	create: function() {
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
		this.scoreController.createTeleportCount();
	},

	// The standard update function.
	update: function() {
		this.determineCannonRotation(); 

		// Teleport the ball.
		game.input.onTap.add(function() {
			if (this.activeBall && this.teleports > 0 && !this.levelController.gameBall.recentTeleport
				&& !this.teleportDelay) {
				this.levelController.gameBall.place();
				this.soundController.placerTeleportSound();
        		this.teleports--;
        		this.scoreController.updateTeleportText(this.teleports);
			}
		}, this);

		// Fire a new ball.
		game.input.onTap.add(function() {
			if (!this.activeBall && this.ballsRemaining > 0) {
				this.levelController.createPlayerBall();

				this.activeBall = true;
				this.soundController.fireSound();

				this.ballsRemaining--;

				// Prevent instant teleport when you fire.
				this.teleportDelay = true;

				var _this = this;
				setTimeout(function() {
					_this.teleportDelay = false;
				}, 1000);
			}
		}, this);

		//If the game is over.
		if (this.ballsRemaining === 0 && !this.activeBall && this.currentMode === "playing")
		{
			var levelIdentifier = this.getLevelAndDifficultyScore();
			var highScore       = this.scoreController.getLevelScore(levelIdentifier);

			var popup = game.add.sprite(200, 600, "gameOver");

			game.add.text(250, 750, "Your score: " + this.scoreController.currentScore, {
      			font: "40px Arial",
     			fill: "#FFFFFF"
    			});
			game.add.text(250, 850, "Top score: " + highScore, {
      			font: "40px Arial",
      			fill: "#FFFFFF"
    			});

			if (this.scoreController.currentScore > highScore)
				this.scoreController.updateLevelScore(levelIdentifier);

			this.currentMode = "gameover";
		}
	},

	// Point the cannon in the direction of the pointer.
	determineCannonRotation: function() {
		// Change this to use formulae at some point.
		cannon.rotation = game.physics.arcade.angleToPointer(cannon);
	},


	// Get the current saved score for this level and difficulty.
	getLevelAndDifficultyScore: function() {
		switch(this.selectedLevel) {
		case 1:
			switch(this.selectedDifficulty){
				case "easy":
					return "easyOneScore";
					break;
				case "medium":
					return "mediumOneScore";
					break;
				case "hard":
					return "hardOneScore";
					break;
			}
			break;
		case 2:
			switch(this.selectedDifficulty){
				case "easy":
					return "easyTwoScore";
					break;
				case "medium":
					return "mediumTwoScore";
					break;
				case "hard":
					return "hardTwoScore";
					break;
			}
			break;
		case 3:
			switch(this.selectedDifficulty){
				case "easy":
					return "easyThreeScore";
					break;
				case "medium":
					return "mediumThreeScore";
					break;
				case "hard":
					return "hardThreeScore";
					break;
			}
			break;
		default:
			return "error";
		}
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