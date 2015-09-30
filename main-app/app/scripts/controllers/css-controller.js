(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.CssSelection')
        .controller('CssModelController',  ['$scope', function ($scope) {


            $scope.stylePath = 'css/main.css';

            $scope.changePath = function () {
                if ($scope.stylePath === 'css/main.css'){
                    $scope.stylePath = 'css/alternative.css';
                } else if ($scope.stylePath === 'css/alternative.css') {
                    $scope.stylePath = 'css/main.css';
                }
            };

        }]);
})();