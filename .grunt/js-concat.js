(function () {
    'use strict';
    module.exports = {
        concatJS: {
            src: ['main-app/app/scripts/*.js', 'main-app/app/scripts/controllers/*.js', 'main-app/app/scripts/services/*.js'],
            dest: '.build/main-app/app/scripts/app.js'
        }
    };
})();