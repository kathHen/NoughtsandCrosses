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

            inject(function ($injector, Game) {
                sandbox = sinon.sandbox.create();
                game = Game;
                gameApiProxy = $injector.get('GameApiProxy');
                makingMovesSpy = sinon.sandbox.spy(mocks.game, 'makingMoves');
                humangameplayStub = sinon.sandbox.stub(mocks.game, 'humangameplay');
                newGameMakerSpy= sinon.sandbox.spy(mocks.game, 'startNewGame');
                endGameSpy = sinon.sandbox.spy(mocks.endofGame, 'endofGame');
            });
        });

        it('humangameplay is called at least once', function(){
            mocks.game.humangameplay(0);
            humangameplayStub.should.have.been.calledOnce;
        });

        it('makingMoves is called at least once', function(){
            mocks.game.makingMoves();
            makingMovesSpy.should.have.been.calledOnce;
        });

        it('humangameplay is called at least once', function(){
            mocks.game.startNewGame();
            newGameMakerSpy.should.have.been.calledOnce;
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