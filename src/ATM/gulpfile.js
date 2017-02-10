/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
    webroot: "./wwwroot/"
};

var itemsToCopy = {
    './node_modules/angular*.js': paths.webroot + 'lib'
}
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";

gulp.task('copy',
    function() {
        for (var src in itemsToCopy) {
            if (!itemsToCopy.hasOwnProperty(src)) continue;
            gulp.src(src).pipe(gulp.dest(itemsToCopy[src]));
        }
    });

gulp.task('default', function () {
    // place code for your default task here
});

