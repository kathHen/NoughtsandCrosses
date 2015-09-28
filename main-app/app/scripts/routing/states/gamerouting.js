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
                .state('gameplay', {
                    url: '/gameplay',
                    templateUrl: 'html/gameplay.html'
                })
                .state('gameplay.gamestate', {
                    url: '',
                    templateUrl: 'gameplay.gamestate.html',
                    controller: function($scope){
                        $scope.GameState.GameModel();
                    }
                })
                .state('gamerules', {
                    url: '/gamerules',
                    templateUrl: 'html/gamerules.html'
                });
        });

})();