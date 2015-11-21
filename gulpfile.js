/* eslint-env node */

var gulp = require('gulp');

gulp.task('default', function() {
	gulp.src('data/**/*.json')
		.pipe(gulp.dest('./build/js'));
});
