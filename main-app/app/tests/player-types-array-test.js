(function () {
    'use strict';

    describe('Test game-constants', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.PlayerSelection');
            inject(function ($injector) {
                constants = $injector.get('PlayerTypes');
            });
        });
        it('Ensure player type 0 is human', function () {
            assert.equal('Human', constants[0]);
        });

        it('Ensure player type 1 is random', function() {
            assert.equal('Random', constants[1]);
        });

        it('Ensure player type 2 is pre-trained', function() {
            assert.equal('Pre-trained', constants[2]);
        });

    });
})();