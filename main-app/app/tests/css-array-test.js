(function () {
    'use strict';

    describe('Test game-constants', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.CssSelection');
            inject(function ($injector) {
                constants = $injector.get('cssArray');
            });
        });
        it('Ensure css type 0 is main.css', function () {
            assert.equal('css/main.css', constants[0]);
        });

        it('Ensure player type 1 is alternative', function() {
            assert.equal('css/alternative.css', constants[1]);
        });

    });
})();