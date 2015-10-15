(function () {
    'use strict';
    describe('Test css selector function', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.PlayerSelection');
            inject(function ($injector) {
                constants = $injector.get('CharacterSelection');
            });
        });
        it('From the top, the players should be certain Pre-trained and Human', function () {
            constants.player1.should.equal('Pre-trained');
            constants.player2.should.equal('Human');
        });

        it('Using the function should change the players by one space in the array', function() {
            constants.togglePlayer(1);
            constants.player1.should.equal('Human');
            constants.togglePlayer(2);
            constants.player2.should.equal('Random');
        });

        it('Using the function should change the players by two spaces in the array', function() {
            constants.togglePlayer(1);
            constants.togglePlayer(1);
            constants.player1.should.equal('Random');
            constants.togglePlayer(2);
            constants.togglePlayer(2);
            constants.player2.should.equal('Pre-trained');
        });
    });
})();