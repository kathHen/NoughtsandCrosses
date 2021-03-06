(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.EndGame')
        .service ('Endgame', ['$state', '$timeout', 'GameModel',
        function($state, $timeout, gameModel)  {
        var me = this;

        me.checkingEndGame = function () {
               if (gameModel.gameState === 'Draw') {
                   $state.go('gameplayInProgress.draw');
               }
               if (gameModel.gameState === 'Win') {
                   $state.go('gameplayInProgress.win');
               }
           };

    }]);
})();