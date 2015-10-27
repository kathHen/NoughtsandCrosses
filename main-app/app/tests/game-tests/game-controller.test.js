(function () {
    'use strict';
    describe('Game controller tester', function () {
        var $scope,
            controller;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.Game');
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();

                controller = $controller('GameController', {
                    $scope: $scope,
                    Game: mocks.game
                });
            });
        });

        it('Controllersets the scope to the passed game service', function(){
            $scope.game.should.equal(mocks.game);
        });

    });
})();