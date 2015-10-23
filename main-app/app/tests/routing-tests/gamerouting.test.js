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
            $templateCache.put('html/playerselect.html', 'html/playerselect.html');
            $templateCache.put('html/gameplay.html', 'html/gameplay.html');
            $templateCache.put('html/winplayer.html', 'html/winplayer.html');
            $templateCache.put('html/draw.html', 'html/draw.html');

            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
            $rootscope.$digest();

        });

        it('Make sure the default state is playerselect', function () {
            var state = $state.get('playerselection');
            should.exist(state);
            state.url.should.equal('/playerselect');
            state.controller.should.equal('MainController');
            state.templateProvider($templateCache).should.equal($templateCache.get('html/playerselect.html'));
        });

        it('Gameplay should equal gameplay', function(){
            var state = $state.get('gameplayInProgress');
            should.exist(state);
            state.url.should.equal('/gameplay');
            state.templateProvider($templateCache).should.equal($templateCache.get('html/gameplay.html'));
        });

        it('Gameplay in progress should equal to Win', function () {
            var state = $state.get('gameplayInProgress.win');
            should.exist(state);
            state.url.should.equal('/win');
            state.templateProvider($templateCache).should.equal($templateCache.get('html/winplayer.html'));
        });

        it('Gameplay in progress should equal to Draw', function () {
            var state = $state.get('gameplayInProgress.draw');
            should.exist(state);
            state.url.should.equal('/draw');
            state.templateProvider($templateCache).should.equal($templateCache.get('html/draw.html'));
        });

        afterEach(function(){
            sandbox.restore();
            spyonState.restore();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
})();