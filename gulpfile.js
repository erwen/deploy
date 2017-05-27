var gulp = require('gulp');

var rimraf = require('rimraf');

gulp.task('clean', function(cb) {
	rimraf('./build', cb);
});

gulp.task('cleanDir', function(cb) {
	rimraf('./build/src/localtest', cb);
});

/*gulp.task('cleanFile', function(cb) {
	rimraf('./build/src/config/config.development.js', cb);
});*/

gulp.task('default', ['cleanDir'], function() {

	gulp.src(['package.json', 'process.production.json', 'process.development.json','process.test.json'])
		.pipe(gulp.dest('build'));

	gulp.src(['logs'])
		.pipe(gulp.dest('build'));
});