// include plug-ins
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssMini = require('gulp-minify-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('Demo-01-fonts', function() {
    
    gulp.src('./bower_components/font-awesome/fonts/*.*')
    .pipe(gulp.dest('./demo/fonts'));
    
});

gulp.task('Demo-02-libs', function() {
    
    gulp.src(['./bower_components/angular/angular.min.js',
              './bower_components/angular-route/angular-route.min.js',              
              './bower_components/google-code-prettify/bin/prettify.min.js'])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('demo/assets/'));

    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css',
              './bower_components/font-awesome/css/font-awesome.min.css',
              './bower_components/google-code-prettify/bin/prettify.min.css'])
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('demo/assets/'));
    
});

gulp.task('Demo-03-app', function() {
    
    gulp.src(['./demo/app/*.scss', './demo/app/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(cssMini())
        .pipe(gulp.dest('demo/assets/'));
    
    var b = browserify({
        entries: './demo/app/index.js',
        debug: true
    });

    return b.bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
          // Add transformation tasks to the pipeline here.
          .pipe(uglify())
          .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('demo/assets/'));
    
});

gulp.task('Demo', ['Demo-01-fonts', 'Demo-02-libs', 'Demo-03-app'], function () { });

gulp.task('Build', function () {

    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './src/jhCodeMirror.index.js',
        debug: true
    });

    return b.bundle()
      .pipe(source('jh-code-mirror.min.js'))
      .pipe(buffer())
      //.pipe(sourcemaps.init({ loadMaps: true }))
          // Add transformation tasks to the pipeline here.
          .pipe(uglify())
          .on('error', gutil.log)
      //.pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/'));

});