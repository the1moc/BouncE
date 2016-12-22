// All sound calls 
SoundPlayer = function(game) {
  fire        = game.add.audio("fire");
  standardHit = game.add.audio("standardhit");

  return {
    // The ball has been fired.
    fireSound: function() {
        fire.play();
        standardHit.play();
    },

    // A standard ball has been hit
    standardCollideSound: function() {
      standardHit.play();
    }
  }
};