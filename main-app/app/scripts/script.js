(function(){
    'use strict';
    angular.module('Tombola.MyModule', [])
        .controller('MyController', function ($scope){
            $scope.message="Hello World";
            var currentPlayer = "1";
            $scope.player1="Human";
            $scope.player2="Human";
            $scope.gameboard="000000000";

            var setCharAt = function (string, index, character) {
                return string.substr(0,index) + character + string.substr(index+1);
            };

                $scope.gameplay = function(gridNumberIndex){
                    if ($scope.gameboard.charAt(gridNumberIndex) != '0'){
                        return;
                    }
                    if (currentPlayer === "1"){
                        $scope.gameboard = setCharAt($scope.gameboard, gridNumberIndex, currentPlayer);
                        currentPlayer = "2";
                    }
                    else {
                        $scope.gameboard = setCharAt($scope.gameboard, gridNumberIndex, currentPlayer);
                        currentPlayer = "1";
                    }
            };
        });
})();
