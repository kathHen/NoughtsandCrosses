(function () {
    'use strict';
    describe('Test game-constants', function () {
        var cssModel;
        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.CssSelection');
            inject(function (_CssModel_) {
                cssModel = _CssModel_;
            });
        });
        it('should have a rotateCssStyle function', function () {
            should(angular.isFunction(cssModel.rotateCssStyle)).toBe(true);
        });

    });

})();