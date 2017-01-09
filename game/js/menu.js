var menuState = {

	init: function() {
		// Add some extra properties to the buttons.
		Phaser.Button.prototype.isSelected  = false;
		this.selectedLevel                  = 1;
		this.selectedDifficulty             = "easy";

		this.checkScoresExist();
	},

	// The standard creation function.
	create: function() {
		game.add.sprite(0, 0, "menuBackground");

		this.addButtons();
	},

	// Adding the buttons.
	addButtons: function() {
		game.add.button(25, 550, "play", this.playButtonClick, this);
		game.add.button(25, 725, "record", this.scoreButtonClick, this);

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

	// Check the local storage for the current high scores.
	checkScoresExist: function() {
		if(!localStorage.getItem('easyOneScore'))
			localStorage.setItem('easyOneScore', 0);

		if(!localStorage.getItem('mediumOneScore'))
			localStorage.setItem('mediumOneScore', 0);

		if(!localStorage.getItem('hardOneScore'))
			localStorage.setItem('hardOneScore', 0);

		if(!localStorage.getItem('easyTwoScore'))
			localStorage.setItem('easyTwoScore', 0);

		if(!localStorage.getItem('mediumTwoScore'))
			localStorage.setItem('mediumTwoScore', 0);

		if(!localStorage.getItem('hardTwoScore'))
			localStorage.setItem('hardTwoScore', 0);

		if(!localStorage.getItem('easyThreeScore'))
			localStorage.setItem('easyThreeScore', 0);

		if(!localStorage.getItem('mediumThreeScore'))
			localStorage.setItem('mediumThreeScore', 0);

		if(!localStorage.getItem('hardThreeScore'))
			localStorage.setItem('hardThreeScore', 0);
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
		button.isSelected       = true;
		this.selectedDifficulty = button.difficulty;
		button.loadTexture(selectedBitmap);
	},

	// Fired on a click of the play button.
	playButtonClick: function() {
		game.state.start("playing");
	},

	// Fired on a click of the score button.
	scoreButtonClick: function() {
		// Start playing the game
		easyOne     = localStorage.getItem('easyOneScore');
		mediumOne   = localStorage.getItem('mediumOneScore');	
		hardOne     = localStorage.getItem('hardOneScore');		
		easyTwo     = localStorage.getItem('easyTwoScore');		
		mediumTwo   = localStorage.getItem('mediumTwoScore');
		hardTwo     = localStorage.getItem('hardTwoScore');		
		easyThree   = localStorage.getItem('easyThreeScore');
		mediumThree = localStorage.getItem('mediumThreeScore');
		hardThree   = localStorage.getItem('hardThreeScore');

		scores              = game.add.sprite(100, 500, "highScore");
		scores.inputEnabled = true;

		scores.events.onInputDown.add(function() {
			scores.destroy();
		}, this);

		scoreFont = {
      					font: "30px Arial",
     					fill: "#000000"
    				};

    	scores.addChild(game.add.text(100, 140, "Level One - Easy: " + easyOne, scoreFont));
    	scores.addChild(game.add.text(100, 180, "Level One - Medium: " + mediumOne, scoreFont));
    	scores.addChild(game.add.text(100, 220, "Level One - Hard: " + hardOne, scoreFont));
    	scores.addChild(game.add.text(100, 260, "Level Two - Easy: " + easyTwo, scoreFont));
    	scores.addChild(game.add.text(100, 300, "Level Two - Medium: " + mediumTwo, scoreFont));
    	scores.addChild(game.add.text(100, 340, "Level Two - Hard: " + hardTwo, scoreFont));
    	scores.addChild(game.add.text(100, 380, "Level Three - Easy: " + easyThree, scoreFont));
    	scores.addChild(game.add.text(100, 420, "Level Three - Medium: " + mediumThree, scoreFont));
    	scores.addChild(game.add.text(100, 460, "Level Three - Hard: " + hardThree, scoreFont));
    	scores.addChild(game.add.text(100, 520, "Press to close...", scoreFont));
	}
};