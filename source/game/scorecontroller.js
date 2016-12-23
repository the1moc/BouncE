// All interactions with the score.
ScoreController = function(game) {
  this.createScore = function() {
    this.highScore = 0;
    this.highScoreText = game.add.text(800, 25, "0", {
      font: "50px Arial",
      fill: "#000000"
    });

    // Add points to the score
    this.addToScore = function(points) {
      this.highScore += points;
    }

    // Update the text displaying the
    this.updateScoreText = function() {
      this.highScoreText.setText(this.highScore);
    }
  }
};