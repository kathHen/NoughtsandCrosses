(function(){
        'use strict';
        angular.module('Tombola.NoughtsandCrosses')
            .controller('MainController', ['$scope', 'Game', function ($scope, game) {

                $scope.humangameplay = function(gridNumberIndex) {
                    game.humangameplay(gridNumberIndex);
                };

                $scope.newGameMaker = function(){
                    game.startNewGame();
                };

                $scope.makingMoves = function(gridNumber){
                    game.makingMoves(gridNumber);
                };

            }]);

})();