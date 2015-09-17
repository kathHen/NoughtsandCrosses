(function() {
    'use strict';
    angular.module('Tombola.MyModule.characterSelect', [])

        .service('Characterselect', function() {

            $scope.characterSelection = function (playerSelect){
                if (playerSelect === 1){
                    $scope.player1 = selectOptionsForPlayer($scope.player1);
                } else {
                    $scope.player2 = selectOptionsForPlayer($scope.player2);
                }

            };

            var selectOptionsForPlayer = function (options){
                if (options === "Human") {
                    return "Random";
                }
                else if(options === "Random"){
                    return "Pre-trained";
                }
                else {
                    return "Human";
                }
            };



        });
})();