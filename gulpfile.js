var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
    return gulp.src('.')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('.'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['default']);
    gulp.watch('src/**/*.css', ['default']);
});