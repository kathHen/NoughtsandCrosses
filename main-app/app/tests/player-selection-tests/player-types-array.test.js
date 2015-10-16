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
            constants[0].should.equal('Human');
        });

        it('Ensure player type 1 is random', function() {
            constants[1].should.equal('Random');
        });

        it('Ensure player type 2 is pre-trained', function() {
            constants[2].should.equal('Pre-trained');
        });

    });
})();
