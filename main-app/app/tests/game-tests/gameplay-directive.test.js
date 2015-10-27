(function () {
    'use strict';
    describe('testing directive for gamestate', function(){
        var directiveElement,
            $compile,
            $rootScope;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses');
            module('Tombola.NoughtsandCrosses.Game');


            inject(function (_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            });
            directiveElement = '<game-board></game-board>';

        });

        it('Makes sure theres elements to find', function(){
            $rootScope.gameBoard = {humangameplay: 0};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            element[0].toString().should.equal('[object HTMLElement]');
        });

        it('Finds container element which holds the gameboard', function(){
            $rootScope.gameBoard = {humangameplay: 0};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var insideElement = element[0].children[0].children[0];

            insideElement.className.should.be.equal('container');
        });


        it('Replaces the element with the appropriate content from the child of two divs in', function(){
            $rootScope.gameBoard = {humangameplay: 0};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var insideElement = element[0].children[0].children[0].children[1];

            insideElement.className.should.be.equal('square colBorder');
        });

        it('Replaces the element with the appropriate content from the child of four divs in', function(){
            $rootScope.gameBoard = {humangameplay: 0};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var insideElement = element[0].children[0].children[0].children[3];

            insideElement.className.should.be.equal('square rowBorder');
        });

        //it('Replaces the element with the appropriate content from the child of four divs in', function(){
        //    $rootScope.gameBoard = {humangameplay: 0};
        //    var element = $compile(directiveElement)($rootScope);
        //    $rootScope.$digest();
        //
        //    var insideElement = element[1];
        //
        //    //insideElement.className.should.be.equal('button');
        //
        //    insideElement.attr('class').should.equal('button');
        //});

    });
})();