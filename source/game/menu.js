var menuState = {

	init: function() {
		// Add some extra properties to the buttons.
		Phaser.Button.prototype.levelNumber = 0;
		Phaser.Button.prototype.isSelected  = false;
		Phaser.Button.prototype.difficulty  = "easy";
		this.selectedLevel                  = 1;
		this.selectedDifficulty             = "easy";
	},

	// The standard creation function.
	create: function() {
		game.add.sprite(0, 0, "menuBackground");

		this.addButtons();
	},

	// Adding the buttons.
	addButtons: function() {
		game.add.button(25, 550, "play", this.playButtonClick, this);
		game.add.button(25, 725, "record", this.recordButtonClick, this);

		var levelOneText   = game.add.text(45, 15, "1", {font: "20px Arial", fill: "#ffffff"});
		var levelTwoText   = game.add.text(45, 15, "2", {font: "20px Arial", fill: "#ffffff"});
		var levelThreeText = game.add.text(45, 15, "3", {font: "20px Arial", fill: "#ffffff"});

		var easyText   = game.add.text(30, 15, "Easy", {font: "20px Arial", fill: "#ffffff"});
		var mediumText = game.add.text(15, 15, "Medium", {font: "20px Arial", fill: "#ffffff"});
		var hardText   = game.add.text(30, 15, "Hard", {font: "20px Arial", fill: "#ffffff"});

		unselectedBitmap = game.add.bitmapData(100, 50);
		unselectedBitmap.ctx.beginPath();
		unselectedBitmap.ctx.rect(0, 0, 100, 50);
		unselectedBitmap.ctx.fillStyle = "#000000";
		unselectedBitmap.ctx.fill();

		selectedBitmap = game.add.bitmapData(100, 50);
		selectedBitmap.ctx.beginPath();
		selectedBitmap.ctx.rect(0, 0, 100, 50);
		selectedBitmap.ctx.fillStyle = "#179C25";
		selectedBitmap.ctx.fill();

		levelOneButton   = game.add.button(450, 635, selectedBitmap, this.levelButtonClick, this);
		levelTwoButton   = game.add.button(600, 635, unselectedBitmap, this.levelButtonClick, this);
		levelThreeButton = game.add.button(750, 635, unselectedBitmap, this.levelButtonClick, this);
		easyButton       = game.add.button(450, 565, selectedBitmap, this.difficultyButtonClick, this);
		mediumButton     = game.add.button(600, 565, unselectedBitmap, this.difficultyButtonClick, this);
		hardButton       = game.add.button(750, 565, unselectedBitmap, this.difficultyButtonClick, this);

		levelOneButton.levelNumber   = 1;
		levelTwoButton.levelNumber   = 2;
		levelThreeButton.levelNumber = 3;

		easyButton.difficulty   = "easy";
		mediumButton.difficulty = "medium";
		hardButton.difficulty   = "hard";

		levelOneButton.isSelected = true;
		easyButton.isSelected     = true;

		levelOneButton.addChild(levelOneText);
		levelTwoButton.addChild(levelTwoText);
		levelThreeButton.addChild(levelThreeText);

		easyButton.addChild(easyText);
		mediumButton.addChild(mediumText);
		hardButton.addChild(hardText);
	},

	// Remove the isSelected tag from all the level buttons.
	removeLevelSelections: function() {
		if(levelOneButton.isSelected) {
			levelOneButton.isSelected = false;
			levelOneButton.loadTexture(unselectedBitmap);
		}
		if(levelTwoButton.isSelected) {
			levelTwoButton.isSelected = false;
			levelTwoButton.loadTexture(unselectedBitmap);
		}
		if(levelThreeButton.isSelected) {
			levelThreeButton.isSelected = false;
			levelThreeButton.loadTexture(unselectedBitmap);
		}
	},

	// Remove the isSelected tag from all the difficulty buttons.
	removeDifficultySelections: function() {
		if(easyButton.isSelected) {
			easyButton.isSelected = false;
			easyButton.loadTexture(unselectedBitmap);
		}
		if(mediumButton.isSelected) {
			mediumButton.isSelected = false;
			mediumButton.loadTexture(unselectedBitmap);
		}
		if(hardButton.isSelected) {
			hardButton.isSelected = false;
			hardButton.loadTexture(unselectedBitmap);
		}
	},

	// Fired on a click of the play button.
	playButtonClick: function() {
		game.state.start("playing");
	},

	// Fired on the click of a level selection button.
	levelButtonClick: function(button) {
		this.removeLevelSelections();
		button.isSelected  = true;
		this.selectedLevel = button.levelNumber;
		button.loadTexture(selectedBitmap);
	},

	// Fired on the click of a level selection button.
	difficultyButtonClick: function(button) {
		this.removeDifficultySelections();
		button.isSelected  = true;
		this.selectedDifficulty = button.difficulty;
		button.loadTexture(selectedBitmap);
	},

	// Fired on a click of the score button.
	recordButtonClick: function() {
		// Start playing the game
		game.state.start("score");
	}
};