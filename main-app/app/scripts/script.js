(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Core', []);
    angular.module('Tombola.NoughtsandCrosses.PlayerSelection', []);
    angular.module('Tombola.NoughtsandCrosses.GamestateHtml', []);
    angular.module('Tombola.NoughtsandCrosses.GameState', ['Tombola.NoughtsandCrosses.GamestateHtml', 'Tombola.NoughtsandCrosses.EndGame']);
    angular.module('Tombola.NoughtsandCrosses.EndGame', ['ui.router', 'Tombola.NoughtsandCrosses.GameState']);
    angular.module('Tombola.NoughtsandCrosses.Game', ['Tombola.NoughtsandCrosses.Core', 'Tombola.NoughtsandCrosses.PlayerSelection',
                    'Tombola.NoughtsandCrosses.GameState', 'Tombola.NoughtsandCrosses.EndGame']);
    angular.module('Tombola.NoughtsandCrosses', ['Tombola.NoughtsandCrosses.PlayerSelection',
                   'Tombola.NoughtsandCrosses.Game', 'Tombola.NoughtsandCrosses.GameState',
                   'ui.router', 'Tombola.NoughtsandCrosses.EndGame']);
})();
