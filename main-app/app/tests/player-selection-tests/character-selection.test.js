(function () {
    'use strict';
    describe('Test player selector function', function () {
        var constants;
        var sandbox;
        var characterSelection;
        beforeEach(function () {
            module('Tombola.NoughtsandCrosses', function($provide){
                $provide.value('PlayerTypes', mocks.playerTypes);
            });
            sandbox = sinon.sandbox.create();
            inject(function ($injector) {
                characterSelection = $injector.get('CharacterSelection');
            });
            constants = sinon.sandbox.mock(mocks.playerTypes);
        });
        it('From the top, the players should be certain Pre-trained and Human', function () {
            mocks.characterSelection.player1.should.equal('Pre-trained');
            mocks.characterSelection.player2.should.equal('Human');
        });

        it('Using the function should change the players by one space in the array', function() {
            characterSelection.togglePlayer(1);
            characterSelection.togglePlayer(2);
            mocks.playerTypes[0].should.equal('Human');
            mocks.playerTypes[1].should.equal('Random');
        });

        it('Using the function should change the players by two spaces in the array', function() {
            characterSelection.togglePlayer(1);
            characterSelection.togglePlayer(1);
            characterSelection.togglePlayer(2);
            characterSelection.togglePlayer(2);
            mocks.playerTypes[0].should.equal('Human');
            mocks.playerTypes[1].should.equal('Random');
        });

        afterEach(function () {
            // Restore all the things made through the sandbox
            constants.verify();
            sandbox.restore();
        });
    });
})();