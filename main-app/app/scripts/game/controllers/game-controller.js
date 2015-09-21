(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Game')
        .controller('GameController',  ['$scope', 'Game',  function ($scope, game) {
            $scope.game = game;

       }]);
})();