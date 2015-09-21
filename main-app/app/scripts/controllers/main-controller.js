(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses')
        .controller('MainController', ['$scope', 'Game', function ($scope, game) {

            $scope.gameplay = function(gridNumberIndex) {
                game.gameplay(gridNumberIndex);
            };

            $scope.newGameMaker = function(){
                  game.startNewGame();
            };

            $scope.makingMoves = function(gridNumber){
                game.makingMoves(gridNumber);
            };

        }]);

})();