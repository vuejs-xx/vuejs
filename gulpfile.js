var gulp = require('gulp');
var contentIncluder = require('gulp-content-includer');

gulp.task('lean',function() {
    gulp.src("lean?/*")
        .pipe(contentIncluder({
            includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
        }))
        .pipe(gulp.dest('dist'));

    gulp.src("js/*.js")
        .pipe(gulp.dest('dist'));
});

// 监听任务 运行语句 gulp watch
gulp.task('watch', function () {
    gulp.watch('lean?/**/*', ['lean']);
    gulp.watch('js/*', ['lean']);
});


gulp.task('default', function(){
    gulp.start('watch');
});



