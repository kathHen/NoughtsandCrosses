(function () {
    'use strict';
    module.exports = {
        checkMainJS: {
            src: 'main-app/app/scripts/**/*.js'
        },
        checkGruntJS: {
            src: '.grunt/**/*.js'
        },
        concatJS: {
            cwd: '',
            src: 'main-app/app/scripts/script.js',
            dest: '.build/main-app/app/scripts',
            expand: false
        }
    };
})();