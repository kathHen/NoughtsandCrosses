(function() {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Game')
        .service ('Game', ['CharacterSelection', 'GameApiProxy', 'GameModel', 'Endgame',
        function(characterSelection, gameApiProxy, gameModel, endGame)  {
        var me = this;
        me.gameModel = gameModel;

        me.startNewGame = function(){
            gameApiProxy.makeNewGame(characterSelection.player1, characterSelection.player2)
                .then(function (response){
                    gameModel.startNewGame(response.gameboard, response.outcome, response.winner);
                    endGame.checkingEndGame();
                }).catch(function(response){
                    console.log("This is the error response: " + response);
                });
        };
        me.makingMoves = function(gridNumber){
            gameApiProxy.makeMoveinGame(gameModel.currentPlayer, gridNumber)
                .then(function (response){
                    gameModel.makingGameMove(response.gameboard, response.outcome, response.winner);
                    console.log(response.outcome);
                    endGame.checkingEndGame();

                }).catch (function(response){
                console.log("This is the error response " + response);
            });

        };
        me.humangameplay = function(gridNumberIndex){
            //if (GameModel.gameboard.charAt(gridNumberIndex) != '0' || GameModel.gameState === "Win") {
            //    return;
            //}
            me.makingMoves(gridNumberIndex);
            endGame.checkingEndGame();
        };
    }]);
})();