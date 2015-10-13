(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.CssSelection')
        .service('CssModel',  ['cssArray', function (cssArray) {
            var me = this,
                rotateCssStyle = function () {
                    var nextIndex = cssArray.indexOf(me.stylePath) +1;
                    nextIndex =  nextIndex === cssArray.length ? 0 :  nextIndex;
                    return cssArray[nextIndex];
                };

            me.stylePath = cssArray[0];

            me.toggleCss = function () {
                me.stylePath = rotateCssStyle();
            };

        }]);
})();