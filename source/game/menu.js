var menuState = {

	create: function()
	{
		game.add.sprite(0, 0, "menuBackground");

		this.addButtons();
	},

	// Adding the buttons
	addButtons: function()
	{
		game.add.button(25, 550, "play", this.playButtonClick, this);
		game.add.button(25, 725, "record", this.recordButtonClick, this);
	},

	// Fired on a click of the play button
	playButtonClick: function()
	{
		game.state.start("playing");
	},

	// Fired on a click of the score button
	recordButtonClick: function()
	{
		// Start playing the game
		game.state.start("score");
	}
};