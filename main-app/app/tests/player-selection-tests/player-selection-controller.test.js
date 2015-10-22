(function () {
    'use strict';

    describe('Player selection controller tester', function () {
        var $scope,
            controller;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.PlayerSelection');
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();

                controller = $controller('PlayerSelectionController', {
                    $scope: $scope,
                    CharacterSelection: mocks.characterSelection
                });
            });
        });

        it('Controllersets the scope to the passed character selection service', function(){
            $scope.characterSelection.should.equal(mocks.characterSelection);
        });


    });
})();