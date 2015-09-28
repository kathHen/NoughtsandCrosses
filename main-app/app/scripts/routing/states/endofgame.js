(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.EndGame')
        .service ('Endgame', ['$state', '$interval', 'GameModel', function($state, $interval, GameModel)  {
        var me = this;

        me.checkingEndGame = function (){
            if (GameModel.gameState === 'Draw'){
                $state.go('drawgame');
            }
            //if (GameModel.outcome === 1){
            //    $state.go('winner1');
            //} else if (GameModel.outcome === 2){
            //    $state.go('winner2');
            //}
            if (GameModel.gameState === 'Win'){
                $state.go('winner1');
            }
        };
    }]);
})();