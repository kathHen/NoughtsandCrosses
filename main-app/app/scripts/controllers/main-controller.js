(function(){
        'use strict';
        angular.module('Tombola.NoughtsandCrosses')
            .controller('MainController', ['$scope', 'Game', 'GameModel', 'Endgame', 'CssModel',  function ($scope, game, GameModel, Endgame, CssModel) {

                $scope.humangameplay = function(gridNumberIndex) {
                    game.humangameplay(gridNumberIndex);
                };

                $scope.newGameMaker = function(){
                    game.startNewGame();
                    Endgame.checkingGamewithTime();
                };

                $scope.makingMoves = function(gridNumber){
                    game.makingMoves(gridNumber);
                    Endgame.checkingGamewithTime();
                };

                //$scope.gameModel = GameModel;
                this.gameModel = GameModel;
                this.cssModel = CssModel;



            }]);

})();