GameBall = function(game, rotationSpeed) {
	Phaser.Sprite.call(this, game, game.world.centerX - 15, 10, "gameBall");

	this.recentTeleport = false;
	game.physics.p2.enable(this);

	this.body.rotation = cannon.rotation + 1.5;
	this.body.thrust(50000);
	this.body.collideWorldBounds = true;

	 // Place the ball
    this.place = function() {
        this.body.x = game.input.activePointer.x;
        this.body.y = game.input.activePointer.y;
        this.body.setZeroVelocity();

        this.recentTeleport = true;

        var _this = this;
        setTimeout(function() {
        	_this.recentTeleport = false;
        }, 500);
    }
};

GameBall.prototype = Object.create(Phaser.Sprite.prototype);
GameBall.prototype.constructor = GameBall;