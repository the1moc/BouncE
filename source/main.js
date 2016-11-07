// Create the game
var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

// Add the states
game.state.add("init", initState);
game.state.add("menu", menuState);
game.state.add("playing", playingState);
game.state.add("score", scoreState);

// Get the game started
game.state.start("init");