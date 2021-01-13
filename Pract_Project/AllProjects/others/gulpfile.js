var gulp 				= require("gulp"),
	concat 				= require('gulp-concat'),
	autoprefixer 		= require('gulp-autoprefixer'),
	sass 				= require('gulp-sass'),
	pug 				= require('gulp-pug'),
	watch 				= require('gulp-watch'),
	livereload 			= require('gulp-livereload'),
	sourcemaps 			= require('gulp-sourcemaps'),
	uglify 				= require('gulp-uglify'),
	notify 				= require("gulp-notify"),
	zip 				= require('gulp-zip'),
	gutil 				= require( 'gulp-util' ),
	ftp 				= require( 'vinyl-ftp' ),
	minify 				= require('gulp-minify');

// HTML Task
gulp.task('html' , function(){
	return gulp.src('stage/html/*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist'))
				.pipe(livereload())
});

// CSS Task
gulp.task('css' , function(){

	return gulp.src(['stage/css/**/*.css' , 'stage/css/**/*.scss'])
				.pipe(sourcemaps.init())
				.pipe(sass({outputStyle: 'compressed'}).on('error' , sass.logError))
				.pipe(autoprefixer("last 2 version")) // Add THis In Package.json [ "browserlist" :["last 2 version","> 2%"] ] After ==> "dependencies"
				.pipe(concat('main.css'))
				.pipe(sourcemaps.write('.'))
				.pipe(gulp.dest('dist/css'))
				.pipe(livereload())
});

// JS Task
gulp.task('js' , function(){
	return gulp.src('stage/js/*.js')
				.pipe(concat('main.js'))
				.pipe(minify())
				.pipe(gulp.dest('dist/js'))
				.pipe(livereload())
});

// Watch Task
gulp.task('watch' , function(){
	livereload.listen();
	require('./server.js');
	gulp.watch('stage/html/*.pug' , ['html']);
	gulp.watch(['stage/css/**/*.css' , 'stage/css/**/*.scss'] , ['css']);
	gulp.watch('stage/js/*.js'  , ['js']);
});

// Default Watch
gulp.task('default' , ['watch'])