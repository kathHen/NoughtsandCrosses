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
                .state('gamerules', {
                    url: '/gamerules',
                    templateUrl: 'html/gamerules.html'
                })
                .state('drawgame', {
                    url: '/draw',
                    //controller: 'MainController',
                    templateUrl: 'html/draw.html'
                })
                .state('winner', {
                    url: '/winner',
                    //controller: 'MainController',
                    templateUrl: 'html/winplayer.html'
                })
                .state('winner2', {
                    url: '/winner2',
                    //controller: 'MainController',
                    templateUrl: 'html/winplayer2.html'
                });

        });

})();