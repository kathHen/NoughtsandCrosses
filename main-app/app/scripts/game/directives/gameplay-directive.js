(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses')
        .directive('gameBoard', function (){
            return {
                restrict: 'E',
                template: '<div ng-controller="GameController"> <div class="container"> ' +
                '<div class="square" ng-click="humangameplay(0)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[0]}}"></div>' +
                ' <div class="square colBorder" ng-click="humangameplay(1)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[1]}}"></div>' +
                ' <div class="square" ng-click="humangameplay(2)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[2]}}"></div>' +
                ' <div class="square rowBorder" ng-click="humangameplay(3)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[3]}}"></div>' +
                ' <div class="square rowBorder colBorder" ng-click="humangameplay(4)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[4]}}"></div>' +
                ' <div class="square rowBorder" ng-click="humangameplay(5)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[5]}}"></div>' +
                ' <div class="square" ng-click="humangameplay(6)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[6]}}"></div>' +
                ' <div class="square colBorder" ng-click="humangameplay(7)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[7]}}"></div>' +
                ' <div class="square" ng-click="humangameplay(8)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[8]}}"></div>' +
                ' </div> <button class="button" ui-sref="playerselection">Pick Players</button> <button class="button" ng-click="newGameMaker()">New Game</button>' +
                ' <br/><button class="button" ui-sref="gamerules">Game Rules</button>' +
                ' <div ui-view></div>' +
                ' </div>'
            };
        });
})();