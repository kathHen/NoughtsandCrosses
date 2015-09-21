(function() {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.PlayerSelection')
        .service('CharacterSelection', ['PlayerTypes', function(playerTypes) {
            var me = this,
                rotatePlayerType = function (currentPlayerType) {
                    var nextIndex = playerTypes.indexOf(currentPlayerType) +1;
                    nextIndex =  nextIndex === playerTypes.length ? 0 :  nextIndex;
                    return playerTypes[nextIndex];
                };

            me.player1 = playerTypes[2];
            me.player2 = playerTypes[0];
            me.togglePlayer = function (playerNumber) {
                var playerValueName = 'player' + playerNumber;
                me[playerValueName] =  rotatePlayerType(me[playerValueName]);
            };
        }]);

})();