// Control all collisions and their effects
CollisionController = function(game) {

    playerBallCollisionGroup   = game.physics.p2.createCollisionGroup();
    standardBallCollisionGroup = game.physics.p2.createCollisionGroup();

  return {
    // Add to a collision group
    addToCollisionGroup: function(groupNumber, newItem) {
      switch(groupNumber) {
        case 0:
          newItem.body.setCollisionGroup(playerBallCollisionGroup);
          newItem.body.collides(standardBallCollisionGroup, this.collision);
          break;
        case 1:
          newItem.body.setCollisionGroup(standardBallCollisionGroup);
          newItem.body.collides(playerBallCollisionGroup);
          break;
      }
    },

    collision: function(gameBall, hitBall) {
      if (hitBall instanceof StandardBall)
      {
        alert("Hello");
      }
    }
  };
};