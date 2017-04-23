var player;

var playState = {

    create: function () {
      var monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left');
      var monsterRight = game.add.tileSprite(513, 0, 128, 600, 'monster-right');
      var monsterPink64 = game.add.image(150, 250, 'mob-pink-64');
      var monsterBlue64 = game.add.image(435, 250, 'mob-blue-64');
      player = game.add.image(325, 280, 'player');

      player.anchor.setTo(0.5, 0.5);
      player.scale.setTo(1, 1);
      player.animations.add('run');
      player.animations.play('run', 10, true);
    },

    update: function (){

      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
          player.x -= 4;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
          player.x += 4;
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
          player.y -= 4;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
          player.y += 4;
      }
    },

    render: function () {
      game.debug.spriteInfo(player, 20, 32);
    }

};
