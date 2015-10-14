(function () {
    'use strict';
    describe('Test the API wrapper service', function(){
        var $httpBackend; //provided automatically by the mocks
        var gameApiProxy;
        var mocks;

        beforeEach(function(){
            module('Tombola.NoughtsandCrosses.Core');
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                gameApiProxy = $injector.get('GameApiProxy');
            });
        });

        it('The Api service responds with the correct value in a draw for new game', function($timeout){
            $timeout(function(){
                $httpBackend
                    .expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {"player1": "random", "player2": "pre-trained" })
                    .respond({"outcome":"draw", "gameboard": "121121212", "winner":"0"});
                gameApiProxy
                    .makeNewGame('random', 'pre-trained')
                    .then(function(data){
                        //all the data
                        data.outcome.should.equal('draw');
                        data.gameboard.should.equal('121121212');
                        data.winner.should.equal('0');
                    });
                $httpBackend.flush(); //will not respond until the flush is called, then will run through, super important
                });

            });


        //important to do because the request will still be there and the test will fail
        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();