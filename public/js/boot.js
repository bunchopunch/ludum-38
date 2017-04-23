var bootState = {

    create: function () {

        //Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.restitution = 0.9;

        //Initial Load State
        game.state.start('load');
    }
};
