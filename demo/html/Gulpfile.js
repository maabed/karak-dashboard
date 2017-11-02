var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'),
    less = require('gulp-less');

gulp.task('scss', function() {
  return sass('assets/scss/imports.scss', { style: 'expanded' })
    .pipe(rename({basename: 'style'}))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('less', function () {
  return gulp.src('assets/less/imports.less')
    .pipe(rename({basename: 'style'}))
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('fileinclude', function() {
  gulp.src(['src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'src/'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['scss']);
  gulp.watch('assets/less/**/*.less', ['less']);
  gulp.watch('src/**/*.html', ['fileinclude']);
});

gulp.task('lesstocss', ['less', 'fileinclude', 'watch'], function() {

});

gulp.task('scsstocss', ['scss', 'fileinclude', 'watch'], function() {

});