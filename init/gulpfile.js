var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    rename = require("gulp-rename");

gulp.task('default', ['browserify','watch','connect']);

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: 8000
  });
});

gulp.task('browserify', function(){
    return gulp.src(['app/app.js'])
        .pipe(browserify())
        // .pipe(uglify())
        .pipe(rename("main.js"))
        .pipe(gulp.dest('public/js/'));
});

// var gulp = require('gulp'),
//     uglify = require('gulp-uglify'),
//     server = require('gulp-live-server'),
//     browserify = require('gulp-browserify'),
//     rename = require("gulp-rename");

// gulp.task('default', ['browserify','watch','serve']);


// gulp.task('watch', function() {
//     gulp.watch('app/**/*.js', ['browserify']);
// });

// gulp.task('serve', function() {
//     var serve = server.static('./public', 8000);
//     serve.start();
//     gulp.watch('public/js/**/*.js', function (file) {
//         server.notify.apply(serve, [file]);
//     });
//     gulp.watch('public/**/*.html', function (file) {
//         server.notify.apply(serve, [file]);
//     });

// });

// gulp.task('browserify', function(){
//     return gulp.src(['app/app.js'])
//         .pipe(browserify())
//         .pipe(uglify())
//         .pipe(rename("main.js"))
//         .pipe(gulp.dest('public/js/'));
// });