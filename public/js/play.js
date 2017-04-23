var playState = {

    create: function () {

        var menuLabel = game.add.text(80, 150, 'Playing', {font: '30px Courier', fill: '#fff'});
        game.add.tileSprite(0, 0, 128, 600, 'monster-left');
        game.add.image(95, 150, 'player');


    }

};
