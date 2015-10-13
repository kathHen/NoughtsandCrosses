(function () {
    'use strict';
    module.exports={
        unit:{
            configFile: 'karma.conf.js',
            options:{
                files:[
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'main-app/app/scripts/script.js',
                    'main-app/app/scripts/player-selection/**/*.js',
                    'main-app/app/scripts/css/**/*.js',
                    //'main-app/app/scripts/controllers/main-controller.js',
                    //'main-app/app/scripts/core/services/*.js'
                    'main-app/app/tests/*.js'
                ]
            }
        }
    };
})();