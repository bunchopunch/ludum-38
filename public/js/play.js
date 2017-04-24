var playState = {

    create: function () {
        // -- Set score and other values
        game.score = 0;

        // -- Create the playing field
        var background = game.add.tileSprite(0, 0, 640, 480, 'starfield'),
            scoreTitle = game.add.text(275, 440, 'Ｓ Ｃ Ｏ Ｒ Ｅ', { font: '12px Arial', fill: '#fff' }),
            scoreValue = game.add.text(275, 458, game.score, { font: '12px Arial', fill: '#fff' });

        // -- Physics and collisions
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.restitution = 0.9;

        // -- Groups
        game.mobCollisionGroup    = game.physics.p2.createCollisionGroup();
        game.bossCollisionGroup   = game.physics.p2.createCollisionGroup();
        game.playerCollisionGroup = game.physics.p2.createCollisionGroup();

        // game.allGroup    = game.add.group();
        game.mobGroup    = game.add.group();

        game.bossGroup   = game.add.group();
        game.bossGroup.enableBody = true;
        game.bossGroup.physicsBodyType = Phaser.Physics.P2JS;

        game.playerGroup = game.add.group();
        game.playerGroup.enableBody = true;
        game.playerGroup.physicsBodyType = Phaser.Physics.P2JS;

        // -- Create boss walls
        var bossLeft  = game.add.tileSprite(64, 256, 128, 600, 'monster-left'),
            bossRight = game.add.tileSprite(575, 256, 128, 600, 'monster-right');

        game.bossGroup.add(bossLeft);
        bossLeft.body.static = true;
        bossLeft.body.collideWorldBounds = false;
        bossLeft.body.setCollisionGroup(game.bossCollisionGroup);
        // bossLeft.body.collides([game.playerCollisionGroup]);
        bossLeft.body.setRectangle(64, 600);

        game.bossGroup.add(bossRight);
        bossRight.body.static = true;
        bossRight.body.collideWorldBounds = false;
        bossRight.body.setCollisionGroup(game.bossCollisionGroup);
        // bossRight.body.collides([game.playerCollisionGroup]);
        bossRight.body.setRectangle(12, 600, 0, 0);

        // -- Create player
        game.player = game.playerGroup.create(325, 280, 'player')
        game.player.anchor.setTo(0.5, 0.5);
        game.player.body.collides([game.bossCollisionGroup]);
        game.player.body.fixedRotation = true
        game.player.body.setCircle(16);

        // -- Enemy spawn timer
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
    spawnMob(32, 'mob-pink-64', 1, 1);
    spawnMob(600, 'mob-blue-64', 1, 1);
}

function spawnMob(spawnX, spawnSprite, spawnScale, spawnVelocity) {
    var mob = game.add.sprite(spawnX, game.world.randomY, spawnSprite);
    //mob.scale.setTo(spawnScale, spawnScale);
    //  If you prefer to work in degrees rather than radians then you can use Phaser.Sprite.angle
    //  otherwise use Phaser.Sprite.rotation
    // mob.angle = game.rnd.angle();
    game.physics.p2.enable(mob);
    mob.enableBody = true;
    mob.body.fixedRotation = true
    // mob.body.velocity.x = spawnVelocity;
    mob.body.setCollisionGroup(game.mobCollisionGroup);

    //  Pandas will collide against themselves and the player
    //  If you don't set this they'll not collide with anything.
    //  The first parameter is either an array or a single collision group.
    mob.body.collides(game.playerCollisionGroup);
    game.add.tween(mob).to({ x: game.width + (1600 + mob.x) }, 20000, Phaser.Easing.Linear.None, true);
    // total++;
    //timer = game.time.now + 100;
}