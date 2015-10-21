(function () {
    'use strict';
    describe('Game State checking test', function () {
        var constants,
            GameModelFunctions,
            state,
            gameModel,
            spyonState,
            sandbox,
            currentBoard = {gameboard: '000000000', outcome: 'continue', winner: '0'},
            currentPlayer = 1;


        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.GameState');
            module('ui.router');
            module(function($provide){
                $provide.value('CharacterSelection', mocks.characterSelection);
                $provide.value('$state', mocks.fakeState);
            });
            sandbox = sinon.sandbox.create();
            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
            GameModelFunctions = sinon.sandbox.mock(mocks.GameModelFunctions);
            module(function($injector){

            });
        });

        it('gameboard should respond with 000000000 gameboard', function(){
            currentBoard.gameboard.should.equal('000000000');
        });

        it('gameboard should respond with continue for the outcome', function(){
            currentBoard.outcome.should.equal('continue');
        });

        it('gameboard should respond with winner is 0', function(){
            currentBoard.winner.should.equal('0');
        });

        it('currentplayer should equal 1', function (){
            currentPlayer.should.equal(1);
        });

        it('characterSelection for player1 should be Pre-trained', function(){
            mocks.characterSelection.player1.should.equal('Pre-trained');
        });

        it('characterSelection for player2 should be Human', function(){
            mocks.characterSelection.player2.should.equal('Human');
        });


        afterEach(function(){
            //$interval.flush;
            sandbox.restore();
        });

    });
})();