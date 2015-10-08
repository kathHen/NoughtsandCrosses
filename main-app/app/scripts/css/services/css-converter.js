(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.CssSelection')
        .service('CssModel',  ['cssArray', function (cssArray) {


            //$scope.stylePath = 'css/main.css';
            //
            //$scope.changePath = function () {
            //    if ($scope.stylePath === 'css/main.css'){
            //        $scope.stylePath = 'css/alternative.css';
            //    } else if ($scope.stylePath === 'css/alternative.css') {
            //        $scope.stylePath = 'css/main.css';
            //    }
            //};

            //$scope.stylePath === $scope.stylePath 'css/main.css' ? 'css/alternative.css' : 'css/main.css';


            var me = this;

            var rotateCssStyle = function () {
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