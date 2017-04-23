


var playState = {

    create: function () {

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.restitution = 0.9;

        // Place the sprites on the playing field.
        var background = game.add.tileSprite(0, 0, 640, 480, 'starfield'),
            monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left'),
            monsterRight = game.add.tileSprite(513, 0, 128, 600, 'monster-right'),

            monsterPink64 = game.add.sprite('mob-pink-64'),
            monsterBlue64 = game.add.sprite('mob-blue-64');
        game.player = game.add.sprite(325, 280, 'player');

        var timer = 0;
        var total = 0;

        // Create the physics bodies
        game.physics.p2.enable(game.player);
        game.player.body.setCircle(16);

        game.player.anchor.setTo(0.5, 0.5);
        game.player.scale.setTo(1, 1);
    },
    update: function (){
        game.player.body.setZeroVelocity();

        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            game.player.body.moveLeft(200)
            //game.player.angle += 1;
            releaseMonsterPink64()
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            game.player.body.moveRight(200)
            //game.player.angle += 1;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
          releaseMonsterBlue64()
            game.player.body.moveUp(200)
            //game.player.angle += 1;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            game.player.body.moveDown(200)
            //game.player.angle += 1;
        }
    },

    render: function () {
        game.debug.spriteInfo(game.player, 20, 32);
    }

};

function releaseMonsterPink64() {

    var mummy = game.add.sprite(-(Math.random() * 800), game.world.randomY, 'mob-pink-64');

    mummy.scale.setTo(2, 2);

    //  If you prefer to work in degrees rather than radians then you can use Phaser.Sprite.angle
    //  otherwise use Phaser.Sprite.rotation
    mummy.angle = game.rnd.angle();

    mummy.animations.add('walk');
    mummy.animations.play('walk', 20, true);

    game.add.tween(mummy).to({ x: game.width + (1600 + mummy.x) }, 20000, Phaser.Easing.Linear.None, true);

    // total++;
    timer = game.time.now + 100;

}

function releaseMonsterBlue64() {

    var mummy = game.add.sprite(-(Math.random() * 800), game.world.randomY, 'mob-blue-64');

    mummy.scale.setTo(2, 2);

    //  If you prefer to work in degrees rather than radians then you can use Phaser.Sprite.angle
    //  otherwise use Phaser.Sprite.rotation
    mummy.angle = game.rnd.angle();

    mummy.animations.add('walk');
    mummy.animations.play('walk', 20, true);

    game.add.tween(mummy).to({ x: game.width + (1600 + mummy.x) }, 20000, Phaser.Easing.Linear.None, true);

    // total++;
    timer = game.time.now + 100;

}
