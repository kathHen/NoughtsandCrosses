(function(){
    'use strict';
    angular.module('Tombola.MyModule', ['Tombola.MyModule.gameplayApi', 'Tombola.MyModule.characterSelect'])
        .controller('MyController',  ['$scope', '$q', 'GameapiStuff', function ($scope, $q, GameapiStuff) {
            $scope.message = "Noughts and Crosses";
            var currentPlayer = 1;
            $scope.player1 = "Human";
            $scope.player2 = "Human";
            $scope.gameboard = "000000000";
            $scope.gameState = "";
            $scope.showGame = false;



            var setCharAt = function (string, index, character) {
                return string.substr(0,index) + character + string.substr(index+1);
            };

            $scope.gameplay = function(gridNumberIndex){
                if ($scope.gameboard.charAt(gridNumberIndex) != '0' || $scope.gameState === "Win"){
                    return;
                }
                $scope.gameboard = setCharAt($scope.gameboard, gridNumberIndex, currentPlayer);
                if ($scope.player1 !== 'Human'){
                    currentPlayer = 2;
                }
                makingMoves(gridNumberIndex);
                if ($scope.player1 === "Human" && $scope.player2 === "Human"){
                    currentPlayer = currentPlayer === 1 ? 2 : 1;

                }
            };

            $scope.newGameMaker = function(){
                  GameapiStuff.makeNewGame($scope.player1, $scope.player2)
                      .then(function (response){
                          currentPlayer = 1;
                          $scope.gameState = response.outcome;
                          $scope.gameboard = response.gameboard;
                          $scope.gameWinner = response.winner;
                          $scope.showGame = true;
                  }).catch(function(response){
                      console.log("This is the error response: " + response);
                  });
            };


            var makingMoves = function(gridNumber){
                GameapiStuff.makeMoveinGame(currentPlayer, gridNumber)
                    .then(function (response){

                        $scope.gameboard = response.gameboard;
                        $scope.gameState = response.outcome;
                        $scope.gameWinner = response.winner;

                        console.log(response.outcome);


                    }).catch (function(response){
                        console.log("This is the error response " + response);
                });

            };

            $scope.gameReset = function (){
                $scope.showGame = false;
            };



            //$scope.characterSelection = function (playerSelect){
            //    if (playerSelect === 1){
            //        $scope.player1 = selectOptionsForPlayer($scope.player1);
            //    } else {
            //        $scope.player2 = selectOptionsForPlayer($scope.player2);
            //    }
            //
            //};
            //
            //var selectOptionsForPlayer = function (options){
            //    if (options === "Human") {
            //        return "Random";
            //    }
            //    else if(options === "Random"){
            //        return "Pre-trained";
            //    }
            //    else {
            //        return "Human";
            //    }
            //};

        }]);



})();