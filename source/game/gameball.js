GameBall = function(game, rotationSpeed) {
	this.rotationSpeed = rotationSpeed;

	Phaser.Sprite.call(this, game, game.world.centerX - 15, 10, "gameBall");

	game.physics.p2.enable(this);
	this.body.rotation = cannon.rotation + 1.5;
	this.body.thrust(50000);
	this.body.collideWorldBounds = true;
};

GameBall.prototype = Object.create(Phaser.Sprite.prototype);
GameBall.prototype.constructor = GameBall;