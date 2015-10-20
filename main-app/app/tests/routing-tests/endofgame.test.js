(function () {
    'use strict';
    describe('End of game state Tester', function () {
        var endofGame,
            timeout,
            state,
            spyonState,
            sandbox;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses');
            module('Tombola.NoughtsandCrosses.EndGame', function($provide){
                $provide.value('GameModel', mocks.gameModel);
            });
            sandbox = sinon.sandbox.create();
            inject(function ($injector) {
                timeout = $injector.get('$timeout');
                state = $injector.get('$state');
                endofGame = $injector.get('Endgame');
            });
            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
        });

        it('GameModel should equal be default', function(){
            mocks.gameModel.gameState = "Draw";
            endofGame.checkingEndGame();
            timeout.flush();
            state.current.url.should.equal('/draw');
        });

        it('GameModel should equal to Win', function () {
            mocks.gameModel.gameState = "Win";
            endofGame.checkingEndGame();
            timeout.flush();
            state.current.url.should.equal('/win');
        });

        afterEach(function(){
            sandbox.restore();
            spyonState.restore();
        });

    });
})();