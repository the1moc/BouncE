var initState = {

	preload: function() {
		// Show a loading message.
		game.add.text(100, 100, "Loading files", {
			font: "32px Arial",
			fill: "#ff0044"
		});

		// Add all the menu files.
		game.load.image("menuBackground", "game/assets/menu/background.png");
		game.load.image("play", "game/assets/menu/play.png");
		game.load.image("record", "game/assets/menu/record.png");
		game.load.image("highScore", "game/assets/menu/highscore.png");

		// Add all the playing files.
		game.load.image("cannon", "game/assets/playing/cannon.png");
		game.load.image("dangerBall", "game/assets/playing/dangerball.png");
		game.load.image("gameBall", "game/assets/playing/gameball.png");
		game.load.image("multiplierBall", "game/assets/playing/multiplierball.png");
		game.load.image("subtractBall", "game/assets/playing/subtractball.png");
		game.load.image("deactivatedBall", "game/assets/playing/deactivatedball.png");
		game.load.image("placerBall", "game/assets/playing/placerball.png");
		game.load.image("playBackground", "game/assets/playing/playingBackground.png");
		game.load.image("returnButton", "game/assets/playing/returnButton.png");
		game.load.image("sideBarrier", "game/assets/playing/side.png");
		game.load.image("standardBall", "game/assets/playing/standardball.png");
		game.load.image("gameOver", "game/assets/playing/gameover.png");

		// Add all the physics (.json) files
		game.load.physics("ballPhysics", "game/assets/playing/ballPhysics.json");
		game.load.physics("cannonPhysics", "game/assets/playing/cannonPhysics.json");
		game.load.physics("sideBarrierPhysics", "game/assets/playing/sideBarrierPhysics.json");

		// Add all the sound files
		game.load.audio("fire", "game/assets/sound/fire.wav");
		game.load.audio("standardcollide", "game/assets/sound/standardcollide.wav");
		game.load.audio("multipliercollide", "game/assets/sound/multipliercollide.wav");
		game.load.audio("subtractcollide", "game/assets/sound/subtractcollide.wav");
		game.load.audio("placercollide", "game/assets/sound/placercollide.wav");
		game.load.audio("placerteleport", "game/assets/sound/placerteleport.wav");
		game.load.audio("dangercollide", "game/assets/sound/dangercollide.wav");
	},

	create: function() {
		// Required files are loaded, proceed to the main menu
		game.state.start("menu");
	}
};