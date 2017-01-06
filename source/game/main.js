// Create the game
var game = new Phaser.Game(1000, 1600, Phaser.AUTO, "game", {
  preload: preload
});

// The standard preload function.
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  // Fix the size of the game, depending on the platform it is played on.
  if (game.device.desktop) {
    game.scale.maxHeight = window.innerHeight;
  } else {
    game.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
  }
//becca 
  // Keep the aspect ratio correct
  game.scale.maxWidth = game.scale.maxHeight * 0.62;

  // Add the states
  game.state.add("init", initState);
  game.state.add("menu", menuState);
  game.state.add("selection", selectionState);
  game.state.add("playing", playingState);

  // Get the game started
  game.state.start("init");
}