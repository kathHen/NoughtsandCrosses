(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.PlayerSelection')
        .controller('PlayerSelectionController',  ['$scope', 'CharacterSelection', function ($scope, characterSelection) {
            $scope.characterSelection = characterSelection;
    }]);
})();