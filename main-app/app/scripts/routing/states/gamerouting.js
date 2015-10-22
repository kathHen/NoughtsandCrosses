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
                    //templateUrl: 'html/gameplay.html',
                    template: '<game-board></game-board>'
                })
                .state('gameplayInProgress.win',{
                    url: '/win',
                    //templateUrl: 'html/winplayer.html',
                    template: '<h1 class="blink_me">PLAYER {{main.gameModel.outcome}} WINS</h1>',
                    onEnter:function($timeout, $state){
                       resetGame($timeout, $state);
                    }
                })
                .state('gameplayInProgress.draw', {
                    url: '/draw',
                    //templateUrl: 'html/draw.html',
                    template: '<h1 class="blink_me">DRAW!</h1>',
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