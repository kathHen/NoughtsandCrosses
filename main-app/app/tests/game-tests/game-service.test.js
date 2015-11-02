(function () {
    'use strict';
    describe('Test game service', function () {
        var sandbox,
            gameApiProxy,
            endGameSpy,
            game,
            responseData = {"outcome":"continue", "gameboard": "000000000", "winner":"0"},
            makingMovesSpy,
            humangameplayStub,
            newGameMakerSpy;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses');
            module('Tombola.NoughtsandCrosses.EndGame', function($provide){
                $provide.value('GameModel', mocks.gameModel);
            });

            inject(function ($injector) {
                sandbox = sinon.sandbox.create();
                game = $injector.get('Game');
                gameApiProxy = $injector.get('GameApiProxy');
                makingMovesSpy = sinon.sandbox.spy(mocks.game, 'makingMoves');
                humangameplayStub = sinon.sandbox.stub(mocks.game, 'humangameplay');
                newGameMakerSpy= sinon.sandbox.spy(mocks.game, 'startNewGame');
                endGameSpy = sinon.sandbox.spy(mocks.endofGame, 'endofGame');
            });
        });

        it('startnewgame should return an empty gameModel', function(){
            var returnPromise = gameApiProxy.makeNewGame('random', 'pre-trained');
            returnPromise.then(function(response){
                response.should.deep.equal(responseData);
            });
        });

        it('makingMoves should change the responsedata', function(){
            var returnPromise = gameApiProxy.makeMoveinGame(1, '10000000');
            returnPromise.then(function(response){
               response.should.deep.equal(responseData);
            });
        });


        afterEach(function () {
            // Restore all the things made through the sandbox
            sandbox.restore();
        });
    });
})();