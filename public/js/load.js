var loadState = {

    preload: function () {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        var loadingLabel = game.add.text(80, 150, 'ＬＯＡＤＩＮＧ...', {font: '30px Courier', fill: '#fff'});

        //Load your images, spritesheets, bitmaps...
        game.load.image('logo', 'assets/img/logo.png');
        game.load.image('player', 'assets/img/ship.png');
        game.load.image('monster-left', 'assets/img/monster-pink.png');
        game.load.image('starfield', 'assets/img/starfield.png');
        game.load.image('monster-right', 'assets/img/monster-blue.png');
        game.load.image('mob-blue-64', 'assets/img/mob-blue-64.png');
        game.load.image('mob-pink-64', 'assets/img/mob-pink-64.png');

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: function () {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    }
};
