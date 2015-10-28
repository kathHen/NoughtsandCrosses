(function () {
    'use strict';
    describe('Main controller tester', function () {
        var $scope,
            sandbox,
            makingMovesSpy,
            humangameplaySpy,
            newGameMakerSpy,
            controller;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses');
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                sandbox = sinon.sandbox.create();
                makingMovesSpy = sinon.sandbox.spy(mocks.game, 'makingMoves');
                humangameplaySpy = sinon.sandbox.spy(mocks.game, 'humangameplay');
                newGameMakerSpy = sinon.sandbox.spy(mocks.game, 'startNewGame');
                controller = $controller('MainController', {
                    $scope: $scope,
                    Game: mocks.game
                });
            });
        });

        it('Makingmoves should have been called at least once', function(){
            $scope.makingMoves();
            makingMovesSpy.should.have.been.calledOnce;
        });

        it('Humangameplay should have been called at least once', function(){
            $scope.humangameplay();
            humangameplaySpy.should.have.been.calledOnce;
        });

        it('StartNewGame should have been called at least once', function(){
            $scope.newGameMaker();
            newGameMakerSpy.should.have.been.calledOnce;
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();