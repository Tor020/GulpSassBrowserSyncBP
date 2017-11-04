var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
  gulp.src('sass/**/*.scss') //relative to Gulpfile.js 
    .pipe(sass().on('error', sass.logError)) //compiles the sass and if there is an error it explains where
    .pipe(gulp.dest('./css/'));  //outputs compiled sass here
});

//Watch task
gulp.task('default',function() {
  gulp.watch('sass/**/*.scss',['styles']); //path to the files we want to watch, pass in an array with the tasks that we want to run when the files are changed
});