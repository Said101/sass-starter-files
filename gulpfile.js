const gulp = require('gulp');
const browseerSync = require('browser-sync').create();
const sass = require('gulp-sass');


//compile sass

gulp.task('sass', function(){
   return gulp.src(['src/scss/*.scss'])
          .pipe(sass())
          .pipe(gulp.dest('src/css'))
          .pipe(browseerSync.stream());
});

//watch & Serve
gulp.task('serve', ['sass'], function(){
  browseerSync.init({
      server: './src'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*.html']).on('change', browseerSyn.onload);
});

gulp.task('default', ['serve']);
