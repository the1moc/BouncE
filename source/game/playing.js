var playingState = {

        create: function () {

          levelCreator = new LevelCreator(game);
          levelCreator.initialisePhysics();

          // Create and populate the level
          levelCreator.addStaticSprites();
          levelCreator.generateLevel();

          // Add the return button
          levelCreator.addButtons();
        },

        update: function () {
          cannon.rotation = game.physics.arcade.angleToPointer(cannon);
        },

        // Add the ball that the player will fire
        addPlayerBall: function() {
          var gameBall = new GameBall();
        }
};