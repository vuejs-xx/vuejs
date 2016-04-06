var gulp = require('gulp');
var contentIncluder = require('gulp-content-includer');

gulp.task('lean1',function() {
    gulp.src("lean1/*.html")
        .pipe(contentIncluder({
            includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
        }))
        .pipe(gulp.dest('lean1/dist'));
});