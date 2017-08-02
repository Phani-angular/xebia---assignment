var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');


gulp.task('js', function () {
  gulp.src(['js/**/app.js', 'js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js'], function () {
  gulp.watch('js/**/*.js', ['js']);
});


gulp.task('default', ['watch']);
