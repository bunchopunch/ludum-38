var playState = {

    create: function () {
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.physics.p2.restitution = 0.9;

      // Place the sprites on the playing field.
      var background = game.add.tileSprite(0, 0, 640, 480, 'starfield'),
          monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left'),
          monsterRight = game.add.tileSprite(513, 0, 128, 600, 'monster-right'),
          monsterPink64 = game.add.sprite(150, 250, 'mob-pink-64'),
          monsterBlue64 = game.add.sprite(435, 250, 'mob-blue-64');
      game.player = game.add.sprite(325, 280, 'player');

      // Create the physics bodies
      game.physics.p2.enable(game.player);
      game.player.body.setCircle(16);

      game.player.anchor.setTo(0.5, 0.5);
      game.player.scale.setTo(1, 1);
      game.player.animations.add('run');
      game.player.animations.play('run', 10, true);
    },

    update: function (){

      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
          game.player.x -= 4;
          game.player.rotation = -1.5;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
          game.player.x += 4;
          game.player.rotation = 1.5;
      }else if (game.player.angle === -171.9) {
          game.player.x += 4;
          game.player.rotation = -.7;
      }  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
          game.player.y -= 4;
          game.player.rotation = 0;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
          game.player.y += 4;
          game.player.rotation = -3;
      }
    },

    render: function () {
      game.debug.spriteInfo(game.player, 20, 32);
    }

};
