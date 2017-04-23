
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var playState = {


    create: function () {


      var monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left');
      var player = game.add.image(95, 150, 'player');
      player.anchor.setTo(0.5, 0.5);
      player.scale.setTo(1, 1);
      player.animations.add('run');
      player.animations.play('run', 10, true);
    },

    update: function (){

            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
      {
          player.x -= 4;
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
      {
          player.x += 4;
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
      {
          player.y -= 4;
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
      {
          player.y += 4;
      }
    },

    render: function () {
      game.debug.spriteInfo(player, 20, 32);
    }

};
