(function () {
    'use strict';
    describe('Test the API wrapper service', function(){
        var $httpBackEnd; //provided automatically by the mocks
        var gameApiProxy;
        var mocks;
        //var constants;

        beforeEach(function(){
            module('Tombola.NoughtsandCrosses.Core');
            //inject(function ($injector) {
            //    constants = $injector.get('$httpBackEnd');
            //});
            module(function($provide){
                $provide.value('rotateCssStyle', mocks.rotateCssStyle);
            });
        });

        it('The Api service responds with the correct value in a draw for new game', function(){
            $httpBackEnd
                .expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/', {"player1": "random", "player2": "pre-trained" });
                respond({"outcome":"draw", "gameboard": "121121212", "winner":"0"});
            gameApiProxy
                .newGame('random', 'human')
                .then(function(data){
                   //all the data
                    data.outcome.should.equal('draw');
                    data.gameboard.should.equal('121121212');
                    data.winner.should.equal('0');
                });
            $httpBackEnd.flush(); //will not respond until the flush is called, then will run through, super important
        });


        //important to do because the request will still be there and the test will fail
        afterEach(function(){
            $httpBackEnd.verifyNoOutstandingExpectation();
            $httpBackEnd.verifyNoOutstandingRequest();
        })
    });
})();