var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
 rename = require('gulp-rename');
var gulpMinifyCss = require('gulp-minify-css');

var sourcemaps = require('gulp-sourcemaps');
gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});


gulp.task('less', function(){ 
    return gulp.src('./src/blocks/**/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        ;
    /*
           .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
           .pipe(rename('style.css'))
        //.pipe(concat('main.css'))
        .pipe(gulp.dest('../'));
        //.pipe(gulp.dest('app/css')) */
});



gulp.task('watch-less', function(){
  gulp.run('less');
   

  // Watch JS Files
  gulp.watch("./src/blocks/**/*.less", function(event){
  	 gulp.run('less');
    
  });
});