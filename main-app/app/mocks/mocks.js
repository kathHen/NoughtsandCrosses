'use strict';
var mocks = {
    cssModelSelection: {
        toggleCss: function(){},
        stylePath: 'css/main.css'
    },
    characterSelection: {
        togglePlayer: function(){},
        player1: 'Pre-trained',
        player2: 'Human'
    },
    game: {
        makingMoves: function(){},
        startNewGame: function(){},
        humangameplay: function(gridNumberIndex){}
    },
    cssArray:
        ['css/main.css', 'css/alternative.css'],
    playerTypes:
        ['Human', 'Random', 'Pre-Trained'],

    GameModelFunctions: {
        updateCurrentGameModel: function(){},
        startNewGame: function (){},
        makingGameMove: function(){},
        currentPlayerLogic: function(){}
    },
    endofGame: {
        $state: function(){},
        endofGame: function(){},
        GameModel: function(){}
    },
    gameRouting: {
        $state: function(){},
        $timeout: function(){},
        resetGame: function(){}
    },
    fakeState: {
        go: function(){}
    },
    gameModel: {
        gameState: 'Draw'
    },
    gameApiProxy: {
        gameModel: function (){}
    }
};