// All sound calls 
SoundController = function(game) {
  fire        = game.add.audio("fire");
  standardHit = game.add.audio("standardhit");

    // The ball has been fired.
    this.fireSound = function() {
        fire.play();
    }

    // A standard ball has been hit
    this.standardCollideSound = function() {
      standardHit.play();
    }

};