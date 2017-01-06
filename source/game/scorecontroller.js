// All interactions with the score.
ScoreController = function(game) {
  this.createScore = function() {
    this.currentScore = 0;
    this.scoreLabel = game.add.text(650, 25, "Score: 0", {
      font: "40px Arial",
      fill: "#000000"
    });
    this.currentScoreText = game.add.text(775, 25, "0", {
      font: "40px Arial",
      fill: "#000000"
    });
  }

    this.createTeleportCount = function() {
    this.teleportLabel = game.add.text(150, 25, "Teleports:", {
      font: "40px Arial",
      fill: "#000000"
    });
    this.teleportCountText = game.add.text(325, 25, "0", {
      font: "40px Arial",
      fill: "#000000"
    });

    // Add points to the score.
    this.addToScore = function() {
      this.currentScore++;
    }

    // Divide the score.
    this.decreaseScore = function() {
      this.currentScore = Math.round(this.currentScore / (Math.random() + 1));
    }

    // Multiply the score.
    this.multiplyScore = function() {
      this.currentScore = Math.round(this.currentScore * (Math.random() + 1));
    }

    // Update the text displaying the
    this.updateScoreText = function() {
      this.currentScoreText.setText(this.currentScore);
    }

    // Update the text displaying the
    this.updateTeleportText = function(teleportCount) {
      this.teleportCountText.setText(teleportCount);
    }

    // Get the current level and difficulty high score.
    this.getLevelScore = function(levelAndDifficultyIdentifier) {
      return localStorage.getItem(levelAndDifficultyIdentifier);
    }

    // Update the score for a level.
    this.updateLevelScore = function(levelAndDifficultyIdentifier) {
      localStorage.setItem(levelAndDifficultyIdentifier, this.currentScore)
    }
  }
};