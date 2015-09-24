(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses')
        .config(function($stateProvider, $urlRouterProvider){
           $urlRouterProvider.otherwise("/playerselect");
            $stateProvider
                .state('creatingGame', {
                    url: '/playerselect',
                    controller: 'MainController',
                    templateUrl: 'html/playerselect.html'
                })
                .state('gameplayInProgress', {
                    url: '/gameplay',
                    templateUrl: 'html/gameplay.html'
                });
        });

})();