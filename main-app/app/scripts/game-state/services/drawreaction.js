(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.GameState')
        .service('DrawGame',  ['$scope', function ($scope) {
            this.drawGame = function(draw){
              if (draw === 0)
                  return 'draw game';
            };
        }]);
})();