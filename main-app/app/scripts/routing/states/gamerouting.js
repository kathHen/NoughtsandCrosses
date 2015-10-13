(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses')
        .config(function($stateProvider, $urlRouterProvider){
           $urlRouterProvider.otherwise("/playerselect");
            $stateProvider
                .state('playerselection', {
                    url: '/playerselect',
                    controller: 'MainController',
                    templateUrl: 'html/playerselect.html'
                })
                .state('gameplayInProgress', {
                    url: '/gameplay',
                    templateUrl: 'html/gameplay.html'
                })

                .state('gameplayInProgress.win',{
                    url: '/win',
                    templateUrl: 'html/winplayer.html'
                })

                .state('gameplayInProgress.draw', {
                    url: '/draw',
                    templateUrl: 'html/draw.html'
                })

                .state('gamerules', {
                    url: '/gamerules',
                    templateUrl: 'html/gamerules.html'
                })
                .state('drawgame', {
                    url: '/draw',
                    templateUrl: 'html/draw.html'
                })
                .state('winner', {
                    url: '/winner',
                    templateUrl: 'html/winplayer.html'
                });
        });

})();