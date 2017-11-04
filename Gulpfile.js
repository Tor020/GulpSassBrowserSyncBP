var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

var src = {
    sass: 'index/sass/*.scss',
    css: 'index/css',
    html: 'index/*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './index'
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp
        .src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);





// gulp.task('styles', function() {
//   gulp.src('sass/**/*.scss') //relative to Gulpfile.js 
//     .pipe(sass().on('error', sass.logError)) //compiles the sass and if there is an error it explains where
//     .pipe(gulp.dest('./css/'));  //outputs compiled sass here
// });

// //Watch task
// gulp.task('default',function() {
//   gulp.watch('sass/**/*.scss',['styles']); //path to the files we want to watch, pass in an array with the tasks that we want to run when the files are changed
// });