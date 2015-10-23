(function () {
    'use strict';
    describe('Game routing tester', function () {
        var $timeout,
            $state,
            spyonState,
            $rootscope,
            $httpBackend,
            $templateCache,
            sandbox;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses');
            sandbox = sinon.sandbox.create();
            inject(function ($injector, _$state_, _$timeout_, _$rootScope_, _$httpBackend_, _$templateCache_) {
                $timeout = _$timeout_;
                $state = _$state_;
                $rootscope = _$rootScope_;
                $httpBackend = _$httpBackend_;
                $templateCache = _$templateCache_;
            });
            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
            $rootscope.$digest();

        });

        it('Make sure the default state is playerselect', function(){
            $state.current.url.should.equal('/playerselect');
        });

        it('Gameplay should equal gameplay', function () {
            $state.go('gameplayInProgress');
            $timeout.flush();
            $state.current.url.should.equal('/gameplay');
        });

        it('Gameplay in progress should equal to Win', function () {
            $state.go('gameplayInProgress.win');
            $timeout.flush();
            $state.current.url.should.equal('/win');
        });

        it('Gameplay in progress should equal to Win', function () {
            $state.go('gameplayInProgress.draw');
            $timeout.flush();
            $state.current.url.should.equal('/draw');
        });

        afterEach(function(){
            sandbox.restore();
            spyonState.restore();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
})();