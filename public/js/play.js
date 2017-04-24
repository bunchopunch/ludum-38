var playState = {

    create: function () {

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.restitution = 0.9;

        // Place the sprites on the playing field.
        var background = game.add.tileSprite(0, 0, 640, 480, 'starfield'),
            monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left'),
            monsterRight = game.add.tileSprite(513, 0, 128, 600, 'monster-right'),

            monsterPink64 = game.add.sprite('mob-pink-64'),
            monsterBlue64 = game.add.sprite('mob-blue-64');
        game.player = game.add.sprite(325, 280, 'player');

        var playerCollisionGroup = game.physics.p2.createCollisionGroup();
        var mobCollisionGroup = game.physics.p2.createCollisionGroup();

        // Create the physics bodies
        game.physics.p2.enable(game.player);
        game.player.body.fixedRotation = true

        // Collisions
        game.player.body.setCircle(16);

        game.player.anchor.setTo(0.5, 0.5);
        game.player.scale.setTo(1, 1);

        var total = 0;

        spawnTimer = game.time.create(false);
        spawnTimer.loop(2000, spawnMobs, this);
        spawnTimer.start();

    },
    update: function (){
        game.player.body.setZeroVelocity();

        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            game.player.body.moveLeft(200)
            game.player.angle = 270;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            game.player.body.moveRight(200)
            game.player.angle = 90;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            game.player.body.moveUp(200)
            game.player.angle = 0;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            game.player.body.moveDown(200)
            game.player.angle = 180;
        }
    },

    render: function () {
        game.debug.spriteInfo(game.player, 20, 32);
    }

};

function spawnMobs() {
    spawnMob(-32, 'mob-pink-64', 1, .001);
    spawnMob(400, 'mob-blue-64', 1, -.5);
}

function spawnMob(spawnX, spawnSprite, spawnScale, spawnVelocity) {
    var mob = game.add.sprite(spawnX, game.world.randomY, spawnSprite);
    mob.scale.setTo(spawnScale, spawnScale);
    //  If you prefer to work in degrees rather than radians then you can use Phaser.Sprite.angle
    //  otherwise use Phaser.Sprite.rotation
    // mob.angle = game.rnd.angle();
    game.physics.p2.enable(mob);
    mob.body.fixedRotation = true
    mob.body.velocity.x = spawnVelocity;
    // game.add.tween(mob).to({ x: game.width + (1600 + mob.x) }, 20000, Phaser.Easing.Linear.None, true);
    // total++;
    //timer = game.time.now + 100;
}