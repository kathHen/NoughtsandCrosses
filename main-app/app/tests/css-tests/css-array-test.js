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
            constants[0].should.equal('css/main.css');
        });

        it('Ensure player type 1 is alternative', function() {
            constants[1].should.equal('css/alternative.css');
        });

    });
})();