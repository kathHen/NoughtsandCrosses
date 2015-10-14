(function(){
        'use strict';
        angular.module('Tombola.NoughtsandCrosses')
            .controller('MainController', ['$scope', 'Game', 'GameModel', 'CssModel',
                function ($scope, game, gameModel, cssModel) {

                $scope.humangameplay = function(gridNumberIndex) {
                    game.humangameplay(gridNumberIndex);
                };
                $scope.newGameMaker = function(){
                    game.startNewGame();
                };
                $scope.makingMoves = function(gridNumber){
                    game.makingMoves(gridNumber);
                };
                this.gameModel = gameModel;
                this.cssModel = cssModel;
            }]);

})();