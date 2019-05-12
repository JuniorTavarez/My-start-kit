var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;





gulp.task('sass', function() {
  return gulp
    .src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('./public/css'));
    .pipe(browserSync.stream())
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
