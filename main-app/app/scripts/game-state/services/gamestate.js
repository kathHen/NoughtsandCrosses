(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.GameState')
        .service ('GameModel', ['$state', 'CharacterSelection',
        function($state, characterSelection)  {
        var me = this;

        me.currentPlayer = 1;
        me.gameboard = '000000000';
        me.gameState = '';
        me.outcome = '';

        me.updateCurrentGameModel = function (gameboard, outcome, winner){
            me.gameboard = gameboard;
            me.gameState = outcome;
            me.outcome = winner;
        };

        me.startNewGame = function(gameboard, outcome, winner){
            me.currentPlayer = 1;
            if (characterSelection.player1 !== 'Human'){
                me.currentPlayer = 2;
            }
            me.updateCurrentGameModel(gameboard, outcome, winner);
        };

        me.makingGameMove = function(gameboard, outcome, winner){
            me.updateCurrentGameModel(gameboard, outcome, winner);
            me.currentPlayerLogic();
        };

        me.currentPlayerLogic = function(){

            if (characterSelection.player1 === "Human" && characterSelection.player2 === "Human"){
                me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;
            }
        };

    }]);
})();