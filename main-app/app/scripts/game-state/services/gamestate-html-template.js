(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.GamestateHtml')
        .directive('stateHtml', function() {
            return {
                restrict: 'EA',
                templateUrl: '/html/gamestate.html'
            };
        });

})();
