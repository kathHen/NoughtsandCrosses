(function(){
        'use strict';
        angular.module('Tombola.NoughtsandCrosses')
            .controller('MainController', ['$scope', 'Game', 'GameModel', 'Endgame', function ($scope, game, GameModel, Endgame) {

                $scope.humangameplay = function(gridNumberIndex) {
                    game.humangameplay(gridNumberIndex);
                };

                $scope.newGameMaker = function(){
                    game.startNewGame();
                    Endgame.checkingEndGame();
                };

                $scope.makingMoves = function(gridNumber){
                    game.makingMoves(gridNumber);
                    Endgame.checkingEndGame();
                };

                //$scope.gameModel = GameModel;
                this.gameModel = GameModel;

            }]);

})();