(function () {
    'use strict';
    describe('Game State checking test', function () {
        var constants;
        var GameModelFunctions;
        var sandbox;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.GameState');
            sandbox = sinon.sandbox.create();
            inject(function ($injector) {
                constants = $injector.get('GameModel');
            });
            GameModelFunctions = sinon.sandbox.mock(mocks.GameModelFunctions);
        });




        afterEach(function(){
            //$interval.flush;
            //sandbox.restore();
        });

    });
})();