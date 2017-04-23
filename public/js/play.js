var playState = {

    create: function () {
      var monsterLeft = game.add.tileSprite(0, 0, 128, 600, 'monster-left');
      var monsterRight = game.add.tileSprite(513, 0, 128, 600, 'monster-right');
      var player = game.add.image(95, 150, 'player');

      var playingLabel = game.add.text(80, 150, 'Playing', {font: '30px Courier', fill: '#fff'});


    },

    update: function (){

    }

};
