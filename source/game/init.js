var initState = {

	preload: function()
	{
		// Show a loading message.
		game.add.text(100, 100, "Loading files", { font: "32px Arial", fill: "#ff0044"});

		// Add all the menu files.
		game.load.image("menuBackground", "assets/menu/background.png");
		game.load.image("play", "assets/menu/play.png");
		game.load.image("record", "assets/menu/record.png");

		// Add all the playing files.
		game.load.image("playBackground", "assets/playing/playingTile.png");
		game.load.image("cannon", "assets/playing/cannon.png");
		game.load.image("dangerBall", "assets/playing/dangerball.png");
		game.load.image("standardBall", "assets/playing/standardball.png");
		game.load.physics("standardBallPhysics", "assets/playing/ballPhysics.json");
		game.load.image("placerBall", "assets/playing/placerball.png");
		game.load.image("returnButton", "assets/playing/returnButton.png");
		game.load.image("sideBarrier", "assets/playing/side.png");
		game.load.physics("sideBarrierPhysics", "assets/playing/sideBarrierPhysics.json");
	},

	create: function()
	{
		// Required files are loaded, proceed to the main menu
		game.state.start("menu");
	}
};