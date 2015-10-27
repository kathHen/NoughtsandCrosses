(function () {
    'use strict';
    describe('testing directive for gamestate', function(){
        var $compile,
            $rootScope;

        beforeEach(function () {
            module('Tombola.NoughtsandCrosses.GamestateHtml');
            module('Tombola.NoughtsandCrosses.GameState');
        });

    beforeEach(inject(function( _$compile_, _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));


    it('Replaces the element with the appropriate content', function(){
        var directiveElement = '<state-html></state-html>';

        $rootScope.gameModel = {currentPlayer: 0};
        var element = $compile(directiveElement)($rootScope);
        $rootScope.$digest();

        var insideElement = element.find('h3');

        element[0].toString().should.equal('[object HTMLElement]');
        element.attr('class').should.equal('ng-scope');

        insideElement.attr('class').should.be.equal('ng-binding');
        insideElement.text().should.be.equal('Game Progress: ');
    });

    });
})();