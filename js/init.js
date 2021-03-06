var initState = {

	preload: function() {
		// Show a loading message.
		game.add.text(100, 100, "Loading files", {
			font: "32px Arial",
			fill: "#ff0044"
		});

		// Add all the menu files.
		game.load.image("menuBackground", "assets/menu/background.png");
		game.load.image("play", "assets/menu/play.png");
		game.load.image("record", "assets/menu/record.png");
		game.load.image("highScore", "assets/menu/highscore.png");

		// Add all the playing files.
		game.load.image("cannon", "assets/playing/cannon.png");
		game.load.image("dangerBall", "assets/playing/dangerball.png");
		game.load.image("gameBall", "assets/playing/gameBall.png");
		game.load.image("multiplierBall", "assets/playing/multiplierball.png");
		game.load.image("subtractBall", "assets/playing/subtractball.png");
		game.load.image("deactivatedBall", "assets/playing/deactivatedball.png");
		game.load.image("placerBall", "assets/playing/placerball.png");
		game.load.image("playBackground", "assets/playing/playingBackground.png");
		game.load.image("returnButton", "assets/playing/returnButton.png");
		game.load.image("sideBarrier", "assets/playing/side.png");
		game.load.image("standardBall", "assets/playing/standardball.png");
		game.load.image("gameOver", "assets/playing/gameover.png");

		// Add all the physics (.json) files
		game.load.physics("ballPhysics", "assets/playing/ballPhysics.json");
		game.load.physics("cannonPhysics", "assets/playing/cannonPhysics.json");
		game.load.physics("sideBarrierPhysics", "assets/playing/sideBarrierPhysics.json");

		// Add all the sound files
		game.load.audio("fire", "assets/sound/fire.wav");
		game.load.audio("standardcollide", "assets/sound/standardcollide.wav");
		game.load.audio("multipliercollide", "assets/sound/multipliercollide.wav");
		game.load.audio("subtractcollide", "assets/sound/subtractcollide.wav");
		game.load.audio("placercollide", "assets/sound/placercollide.wav");
		game.load.audio("placerteleport", "assets/sound/placerteleport.wav");
		game.load.audio("dangercollide", "assets/sound/dangercollide.wav");
	},

	create: function() {
		// Required files are loaded, proceed to the main menu
		game.state.start("menu");
	}
};
