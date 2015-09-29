(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.EndGame')
        .service ('Endgame', ['$state', '$timeout', 'GameModel', function($state, $timeout, GameModel)  {
        var me = this;

       var checkingEndGame = function () {
               if (GameModel.gameState === 'Draw') {
                   $state.go('drawgame');
               }
               if (GameModel.gameState === 'Win') {
                   $state.go('winner');
               }
           };

            me.checkingGamewithTime = function (){
                $timeout(checkingEndGame, 4000);
            };

    }]);
})();