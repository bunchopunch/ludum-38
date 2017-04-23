var playState = {

    create: function () {
      var monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left');
      var monsterRight = game.add.tileSprite(513, 0, 128, 600, 'monster-right');
      var monsterPink64 = game.add.image(150, 250, 'mob-pink-64');
      var monsterBlue64 = game.add.image(435, 250, 'mob-blue-64');
      game.player = game.add.image(325, 280, 'player');

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
