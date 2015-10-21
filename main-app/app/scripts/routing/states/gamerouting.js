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
                    template: '<div ng-controller="GameController"> ' +
                    '<div class="container">' +
                    ' <div class="square" ng-click="humangameplay(0)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[0]}}"></div>' +
                    ' <div class="square colBorder" ng-click="humangameplay(1)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[1]}}"></div>' +
                    ' <div class="square" ng-click="humangameplay(2)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[2]}}"></div>' +
                    '<div class="square rowBorder" ng-click="humangameplay(3)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[3]}}"></div> ' +
                    ' <div class="square rowBorder colBorder" ng-click="humangameplay(4)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[4]}}"></div>' +
                    ' <div class="square rowBorder" ng-click="humangameplay(5)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[5]}}"></div>' +
                    '<div class="square" ng-click="humangameplay(6)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[6]}}"></div>' +
                    '<div class="square colBorder" ng-click="humangameplay(7)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[7]}}"></div>' +
                    ' <div class="square" ng-click="humangameplay(8)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[8]}}"></div>' +
                    ' </div> <button class="button" ui-sref="playerselection">Pick Players</button> ' +
                    '<button class="button" ng-click="newGameMaker()">New Game</button> <br/>' +
                    '<button class="button" ui-sref="gamerules">Game Rules</button>' +
                    ' <div ui-view></div>' +
                    ' </div>'
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