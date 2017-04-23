var menuState = {

    create: function () {

        var MenuLabel = game.add.text(80, 150, 'Menu', {font: '30px Courier', fill: '#fff'});
        game.add.image(95, 150, 'boiler-logo');

        game.add.plugin(Phaser.Plugin.Debug);
        game.add.plugin(Phaser.Plugin.Inspector);


    }

};
