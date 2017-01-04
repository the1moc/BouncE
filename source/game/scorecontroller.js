// All interactions with the score.
ScoreController = function(game) {
  this.createScore = function() {
    this.highScore = 0;
    this.highScoreText = game.add.text(700, 25, "0", {
      font: "80px Arial",
      fill: "#000000"
    });

    // Add points to the score.
    this.addToScore = function() {
      this.highScore++;
    }

    // Divide the score.
    this.decreaseScore = function() {
      this.highScore = Math.round(this.highScore / (Math.random() + 1));
    }

    // Multiply the score.
    this.multiplyScore = function() {
      this.highScore = Math.round(this.highScore * (Math.random() + 1));
    }

    // Update the text displaying the
    this.updateScoreText = function() {
      this.highScoreText.setText(this.highScore);
    }
  }
};