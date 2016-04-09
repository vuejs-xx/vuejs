var gulp = require('gulp');
var contentIncluder = require('gulp-content-includer');

gulp.task('lean1',function() {
    gulp.src("lean1/*.html")
        .pipe(contentIncluder({
            includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
        }))
        .pipe(gulp.dest('dist/lean1'));

    gulp.src("js/*.js")
        .pipe(gulp.dest('dist/lean1'));
});



gulp.task('default', function(){
    gulp.start('lean1');
});


// 监听任务 运行语句 gulp watch
gulp.task('watch', function () {
    server.listen(port, function (err) {
        if (err) {
            return console.log(err);
        }

    });
});

