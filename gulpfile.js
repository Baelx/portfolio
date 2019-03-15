const gulp = require('gulp'),
sass = require('gulp-sass'),
webpack = require('webpack'),
browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/main.scss') // Gets all files ending with .scss in app/scss and children dirs
  .pipe(sass())
  .pipe(gulp.dest('app/temp/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString())
    }
    console.log(stats.toString());
    callback();
  })
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})

gulp.task('watch', ['browserSync', 'sass', 'scripts'], function (){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/assets/js/**/*.js', ['scriptsRefresh']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
