(function () {
    'use strict';
    describe('Test css selector function', function () {
        var constants;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.CssSelection');
            inject(function ($injector) {
                constants = $injector.get('CssModel');
            });
        });
        it('Current css should be the main', function () {
            constants.stylePath.should.equal('css/main.css');
        });

        it('Should change to alternative css', function() {
            constants.toggleCss();
            constants.stylePath.should.equal('css/alternative.css');
        });

        it('Should be back to main if the toggle is used twice', function(){
            constants.toggleCss();
            constants.toggleCss();
            constants.stylePath.should.equal('css/main.css');
        });

    });
})();