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
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/playerselect.html');
                    }
                })
                .state('gameplayInProgress', {
                    url: '/gameplay',
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/gameplay.html');
                    }
                })
                .state('gameplayInProgress.win',{
                    url: '/win',
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/winplayer.html');
                    },
                    onEnter:function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                })
                .state('gameplayInProgress.draw', {
                    url: '/draw',
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/draw.html');
                    },
                    onEnter:function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                })
                .state('gamerules', {
                    url: '/gamerules',
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/gamerules.html');
                    }
                });
        });
})();