// All sound calls 
SoundController = function(game) {
  fire              = game.add.audio("fire");
  standardCollide   = game.add.audio("standardcollide");
  multiplierCollide = game.add.audio("multipliercollide");
  subtractCollide   = game.add.audio("subtractcollide");
  placerCollide     = game.add.audio("placercollide");
  placerTeleport    = game.add.audio("placerteleport");
  dangerCollide     = game.add.audio("dangercollide");

    // The ball has been fired.
    this.fireSound = function() {
        fire.play();
    }

    // A standard ball has been hit
    this.standardCollideSound = function() {
      standardCollide.play();
    }

    // A multiplier ball has been hit.
    this.multiplierCollideSound = function() {
      multiplierCollide.play();
    }

    // A subtract ball has been hit.
    this.subtractCollideSound = function() {
      subtractCollide.play();
    }

    // A placer ball has been hit.
    this.placerCollideSound = function() {
      placerCollide.play();
    }

    // The gameball has teleported.
    this.placerTeleportSound = function() {
      placerTeleport.play();
    }

    // A placer ball has been hit.
    this.dangerCollideSound = function() {
      dangerCollide.play();
    }

};