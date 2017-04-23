var playState = {

    create: function () {

        var menuLabel = game.add.text(80, 150, 'Playing', {font: '30px Courier', fill: '#fff'});
        game.add.image(95, 150, 'player');

        game.add.plugin(Phaser.Plugin.Debug);
        game.add.plugin(Phaser.Plugin.Inspector);
    }

};
