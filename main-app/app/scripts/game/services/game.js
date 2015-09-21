(function() {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Game')
        .service ('Game', ['CharacterSelection', 'GameApiProxy', function(characterSelection, gameApiProxy)  {
            var me = this,
            currentPlayer = 1;
            me.gameboard = '000000000';
            me.gameState = '';


        //var setCharAt = function (string, index, character) {
        //    return string.substr(0,index) + character + string.substr(index+1);
        //};

            me.startNewGame = function(){
                gameApiProxy.makeNewGame(characterSelection.player1, characterSelection.player2)
                            .then(function (response){
                                currentPlayer = 1;
                                me.gameState = response.outcome;
                                me.gameboard = response.gameboard;
                                me.winner = response.gameWinner;


                            }).catch(function(response){
                                console.log("This is the error response: " + response);
                            });
            };



            me.makingMoves = function(gridNumber){
                gameApiProxy.makeMoveinGame(currentPlayer, gridNumber)
                    .then(function (response){

                        me.gameboard = response.gameboard;
                        me.gameState = response.outcome;
                        me.winner = response.gameWinner;

                        console.log(response.outcome);


                    }).catch (function(response){
                    console.log("This is the error response " + response);
                });

            };

        me.gameplay = function(gridNumberIndex){
            if (me.gameboard.charAt(gridNumberIndex) != '0' || me.gameState === "Win"){
                return;
            }
            //me.gameboard = setCharAt(me.gameboard, gridNumberIndex, currentPlayer);
            if (characterSelection.player1 !== 'Human'){
                currentPlayer = 2;

            }
            me.makingMoves(gridNumberIndex);
            if (characterSelection.player1 === "Human" && characterSelection.player2 === "Human"){
                currentPlayer = currentPlayer === 1 ? 2 : 1;
            }
        };


        // $scope.gameboardOperations = gameboardOperations;
        //
        //    $scope.showGame = false;
        //


        //

        ////
        //    me.newGameMaker = function(){
        //        GameapiStuff.makeNewGame(characterSelection.player1, characterSelection.player2)
        //            .then(function (response){
        //                currentPlayer = 1;
        //                $scope.gameState = response.outcome;
        //                $scope.gameboard = response.gameboard;
        //                $scope.gameWinner = response.winner;
        //                $scope.showGame = true;
        //            }).catch(function(response){
        //                console.log("This is the error response: " + response);
        //            });
        //    };
        //
        //
        //    var makingMoves = function(gridNumber){
        //        GameapiStuff.makeMoveinGame(currentPlayer, gridNumber)
        //            .then(function (response){
        //
        //                $scope.gameboard = response.gameboard;
        //                $scope.gameState = response.outcome;
        //                $scope.gameWinner = response.winner;
        //
        //                console.log(response.outcome);
        //
        //
        //            }).catch (function(response){
        //            console.log("This is the error response " + response);
        //        });
        //
        //    };
        //
        //    $scope.gameReset = function (){
        //        $scope.showGame = false;
        //    };

        }]);
})();