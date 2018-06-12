var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/main.scss') // Gets all files ending with .scss in app/scss and children dirs
  .pipe(sass())
  .pipe(gulp.dest('app/temp/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('sup', function(){
  console.log("sup dude");
})
