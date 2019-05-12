var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('sass:minify', function() {
  return gulp
    .src('./public/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: './public',
    notify: false,
    open: false
  });
});

gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch('./src/sass/**/*', ['sass']);
});

gulp.task('production', ['sass:minify']);
