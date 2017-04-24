var menuState = {

    create: function () {
        // Add plugins
        game.add.plugin(Phaser.Plugin.Debug);
        // game.add.plugin(Phaser.Plugin.Inspector);

        // Set up menu graphics
        game.stage.backgroundColor = "#fff";
        var logo      = game.add.image(75, 100, 'logo');
        var startText = game.add.text(245, 350, 'ＳＴＡＲＴ', {font: '30px Courier', fontWeight: 'bold', fill: '#a6386f'});
        // To add a pointer cursor we'll need a transparent sprite

        // Events
        startText.inputEnabled = true;
        startText.events.onInputDown.add(play, this);

        function play(item) {
            game.state.start('play');
        }
    }
};
