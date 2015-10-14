(function () {
    'use strict';
    describe('Test game-constants', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.CssSelection');
            inject(function ($injector) {
                constants = $injector.get('CssModel');
            });
        });
        it('StylePath is equal to nextIndex', function () {
            should.equal('me.stylepath', constants[nextIndex]);
        });

    });
})();