var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
 

/* BUILD */
gulp.task('build', function() {
  browserify({
    entries: ['./public/js/App.jsx'],
    transform: [reactify]
  })
  .bundle()
  .pipe(source('bundle.js'))
  // Not Uglifying for readability 
  // .pipe(streamify(uglify('bundle.min.js')))
  .pipe(gulp.dest('./public/js'));
});

// Creating simple gulp file just to bundle
gulp.task('default', ['build']);