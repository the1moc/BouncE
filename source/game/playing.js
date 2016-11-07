var playingState = {

        create: function () {

          // Start the physics system
          game.physics.startSystem(Phaser.Physics.P2);

          this.addStaticSprites();
          this.addPlayerBall();

          this.addButtons();
        },

        update: function () {
          cannon.rotation = game.physics.arcade.angleToPointer(cannon);
        },

        // Add the buttons on the game
        addButtons: function() {
          game.add.button(25, 25, "returnButton", this.returnButtonClick, this);
        },

        // Called on the click event
        returnButtonClick: function() {
          game.state.start("menu");
        },

        // Add the sprites that will not be altered during play
        addStaticSprites: function() {
          game.add.tileSprite(0, 0, game.width, game.height, "playBackground");
         
          cannon = game.add.sprite(game.width / 2, 16, "cannon");
          cannon.anchor.set(0.5, 0.5);
        },

        // Add the ball that the player will fire
        addPlayerBall: function() {
          var ball = game.add.graphics(0, 0);
          ball.beginFill(0XFFFF00, 1);
          ball.drawCircle(cannon.bottom, 0, 15);
          ball.endFill();

          cannon.addChild(ball);
        }
};