(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses')
        .config(function($stateProvider, $urlRouterProvider){
           var resetGame = function($timeout, $state){
               $timeout(function(){
                   $state.go('playerselection');
               }, 3000);
           };
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
                    templateUrl: 'html/winplayer.html',
                    onEnter:function($timeout, $state){
                       resetGame($timeout, $state);
                    }
                })
                .state('gameplayInProgress.draw', {
                    url: '/draw',
                    templateUrl: 'html/draw.html',
                    onEnter:function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                })
                .state('gamerules', {
                    url: '/gamerules',
                    templateUrl: 'html/gamerules.html'
                });
        });
})();