'use strict';
var mocks = {
    cssModelSelection: {
        //rotateCssStyle: function(){},
        toggleCss: function(){},
        stylePath: 'css/main.css'
    },
    characterSelection: {
        rotatePlayerType: function(){},
        togglePlayer: function(){},
        player1: 'Pre-trained',
        player2: 'Human'
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
    fakeState: {
        go: function(){}
    },
    gameModel: {
      gameState: 'Draw'
    }
};
