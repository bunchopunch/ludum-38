var playState = {

    create: function () {

      game.add.plugin(Phaser.Plugin.Debug);
      game.add.plugin(Phaser.Plugin.Inspector);

        var menuLabel = game.add.text(80, 150, 'Playing', {font: '30px Courier', fill: '#fff'});

        game.stage.backgroundColor = '#124184';

        //  Enable Box2d physics
        game.physics.startSystem(Phaser.Physics.BOX2D);

      var sprite = game.add.image(95, 150, 'player');

        sprite.body.fixedRotation = true;

        game.add.text(5, 5, 'Use arrow keys to move.', { fill: '#ffffff', font: '14pt Arial' });

        var cursors = game.input.keyboard.createCursorKeys();
    },


update: function (){

    sprite.body.setZeroVelocity();

    if (cursors.left.isDown)
    {
        sprite.body.moveLeft(400);
    }
    else if (cursors.right.isDown)
    {
        sprite.body.moveRight(400);
    }

    if (cursors.up.isDown)
    {
        sprite.body.moveUp(400);
    }
    else if (cursors.down.isDown)
    {
        sprite.body.moveDown(400);
    }

}

};
