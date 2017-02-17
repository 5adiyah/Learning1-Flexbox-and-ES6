const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const jshint = require('gulp-jshint');
const browserify = require('browserify');


gulp.task('default', function(){
  gulp.start('serve');
});

gulp.task('watch', function(){
  gulp.watch(['src/app.js'], ['jsReload']); //when there are any changes to any jsFiles, run jsBuild which will reload the browser, and run jsBrowserify & jshint
  gulp.watch('src/css/*.css', ['cssReload']); //when there are any changes to scss files, run sassBuild which will reconvert the scss files into css files and reload the browser
  gulp.watch(['*.html'], ['htmlReload']); //when there are any changes to scss files, run htmlBuild which will reload the browser
});

gulp.task('jsReload', ['es6'], function(){ //When I call jsReload, run jsBrowserify & jshint
  browserSync.reload(); //then reload the browser
});

gulp.task('cssReload', function(){ //When I call htmlReload
  browserSync.reload(); //reload the browser
});

gulp.task('htmlReload', function(){ //When I call htmlReload
  browserSync.reload(); //reload the browser
});


gulp.task('es6', () => {
	return gulp.src('src/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.start('watch');

});
