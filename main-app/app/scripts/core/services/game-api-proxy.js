(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Core')
        .service('GameApiProxy', ['$http', '$q', function($http, $q) {
            var callGameService = function (action, data){
                var deferred = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/' + action,
                    data,
                    {"withCredentials": 'true'})
                    .then(function gameplayapi(response) {
                        deferred.resolve(response.data);
                    })
                    .catch(function (response) {
                        deferred.reject(response.data);
                    });
                return deferred.promise;
            };

            return {
                makeNewGame: function (playerOne, playerTwo) {
                    return callGameService('newgame', {"player1": playerOne, "player2": playerTwo});
                },

                makeMoveinGame: function(currentPlayer, gridNumberIndex) {
                return callGameService('makemove', {"playerNumber": currentPlayer, "chosenSquare": gridNumberIndex});
                }
            };
    }]);
})();