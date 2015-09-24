(function() {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Game')
        .service ('Game', ['CharacterSelection', 'GameApiProxy', 'GameModel', function(characterSelection, gameApiProxy, GameModel)  {
        var me = this;
        me.gameModel = GameModel;

        me.startNewGame = function(){
            gameApiProxy.makeNewGame(characterSelection.player1, characterSelection.player2)
                .then(function (response){
                    GameModel.startNewGame(response.gameboard, response.outcome, response.winner);

                }).catch(function(response){
                    console.log("This is the error response: " + response);
                });
        };

        me.makingMoves = function(gridNumber){
            gameApiProxy.makeMoveinGame(GameModel.currentPlayer, gridNumber)
                .then(function (response){
                    GameModel.makingGameMove(response.gameboard, response.outcome, response.winner);
                    console.log(response.outcome);
                    me.drawOutcome = function(){

                    if (response.winner === 0){
                         GameModel.winner = 'Draw';
                    }
                }();
                }).catch (function(response){
                console.log("This is the error response " + response);
            });

        };

        me.humangameplay = function(gridNumberIndex){
            if (GameModel.gameboard.charAt(gridNumberIndex) != '0' || GameModel.gameState === "Win"){
                return;
            }
            me.makingMoves(gridNumberIndex);
        };



    }]);
})();