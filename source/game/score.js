var scoreState = {
	create: function() {
		alert("Hello there cowboy");

		// Add the return buttons to the screen.
		this.addButtons();
	},

	// Add the buttons on the game.
    addButtons: function() {
      game.add.button(25, 25, "returnButton", this.returnButtonClick, this);
    },

    // Called on the click event.
    returnButtonClick: function() {
      game.state.start("menu");
    }
};