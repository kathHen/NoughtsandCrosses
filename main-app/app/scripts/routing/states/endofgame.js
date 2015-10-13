(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.EndGame')
        .service ('Endgame', ['$state', '$timeout', 'GameModel',
        function($state, $timeout, GameModel)  {
        var me = this;
        me.checkingEndGame = function () {
               if (GameModel.gameState === 'Draw') {
                   $state.go('gameplayInProgress.draw');
                   $timeout(function(){
                       $state.go('playerselection');
                   },3000);
               }
               if (GameModel.gameState === 'Win') {
                   $state.go('gameplayInProgress.win');
                   $timeout(function(){
                       $state.go('playerselection');
                   },3000);
               }
           };

    }]);
})();