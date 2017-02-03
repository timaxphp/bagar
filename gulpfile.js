var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var cssmin       = require('gulp-cssmin');
var less         = require('gulp-less');
var path         = require('path');

gulp.task('serve', ['less'], function() {

	browserSync.init({
		server: ".",
		notify: false
	});

	gulp.watch("less/**/*.less", ['less']);
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("js/*.js").on('change', browserSync.reload);
});

gulp.task('less', function () {
	return gulp.src('./less/style.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(cssmin())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['serve']);
