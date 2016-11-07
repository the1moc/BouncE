// Create the game

//var height = window.innerHeight * window.devicePixelRatio;
//var width = window.innerWidth * window.devicePixelRatio;

var game = new Phaser.Game(1000, 1600, Phaser.AUTO, "game", {preload: preload});

function preload() {

  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  if(game.device.desktop) {
    game.scale.maxHeight = window.innerHeight;
  }
  else {
    game.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
  }

  // Keep the aspect ratio correct
  game.scale.maxWidth = game.scale.maxHeight * 0.62;

  // Add the states
  game.state.add("init", initState);
  game.state.add("menu", menuState);
  game.state.add("playing", playingState);
  game.state.add("score", scoreState);

  // Get the game started
  game.state.start("init");
  }