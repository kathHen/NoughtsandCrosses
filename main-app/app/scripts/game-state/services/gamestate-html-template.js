(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.GamestateHtml')
        .directive('stateHtml', function() {
            return {
                restrict: 'EA',
                template: '<h3>Game Progress: {{main.gameModel.gameboard}}</h3>'
                //templateUrl: '/html/gamestate.html'
            };
        });

})();
