//TODO - will reinstate in next pull, just completing merge conflict
(function () {
    'use strict';
    describe('Test css selector function', function () {
        var constants;
        var sandbox;
        var cssModelSelection;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.CssSelection');
            sandbox = sinon.sandbox.create();
            inject(function ($injector) {
                constants = $injector.get('CssModel');
            });
            cssModelSelection = sinon.sandbox.mock(mocks.cssModelSelection);
        });
        it('Current css should be the main', function () {
            mocks.cssModelSelection.stylePath.should.equal('css/main.css');
        });

        it('Should change to alternative css', function() {
            constants.toggleCss();
            //mocks.cssModelSelection.stylePath.should.equal('css/alternative.css');
        });

        it('Should be back to main if the toggle is used twice', function(){
            constants.toggleCss();
            constants.toggleCss();
            mocks.cssModelSelection.stylePath.should.equal('css/main.css');
        });

        afterEach(function(){
            //$interval.flush();
            sandbox.restore();
        });

    });
})();