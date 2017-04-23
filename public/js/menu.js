var menuState = {

    create: function () {
        var menuLabel = game.add.text(80, 150, 'Menu', {font: '30px Courier', fill: '#fff'});
        var playText = game.add.text(250, 300, 'Start', {font: '30px Courier', fill: '#fff'});

        game.add.image(95, 150, 'boiler-logo');

        game.add.plugin(Phaser.Plugin.Debug);
        game.add.plugin(Phaser.Plugin.Inspector);

        playText.inputEnabled = true;
        playText.events.onInputDown.add(play, this);

        function play(item) {
            game.state.start('play');
        }
    }
};
