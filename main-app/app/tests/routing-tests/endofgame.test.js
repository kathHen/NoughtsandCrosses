(function () {
    'use strict';
    describe('End of game state Tester', function () {
        var constants;
        var endofGame;
        var sandbox;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.EndGame');
            sandbox = sinon.sandbox.create();
            inject(function ($injector) {
                constants = $injector.get('EndGame');
            });
            endofGame = sinon.sandbox.mock(mocks.endofGame);
        });

        //it.skip(('GameModel should equal to Win', function(){
        //
        //}));



        afterEach(function(){
            //$interval.flush;
            sandbox.restore();
        });

    });
})();