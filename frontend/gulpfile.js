'strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var cssbeautify = require('gulp-cssbeautify');



var uglify = require('gulp-uglify'); 

var DEST_DIR = 'testgulp';

var sassOptions = {
  outputStyle: 'expanded'
};

var prefixerOptions= {
	browsers: ['last 1 version'],
	cascade: false
};

var cssnanoOptions= {
	"preset": [
	  	"default",
	  	{
	  		"discardComments": {"removeAll": true},
		}
	]
};

var plugins = [
	autoprefixer(prefixerOptions),
	cssnano()
];

var uglifyOptions = {
    output: {
        beautify: true
       
    }
};


gulp.task('sass', function() {
	gulp.src([
		'./css/bootstrap.css',
		'./css/style.css'
		])
	.pipe(sass(sassOptions).on('error', sass.logError))

	.pipe(postcss(plugins))
	.pipe(cssbeautify())

	.pipe(rename('main.css'))
	.pipe(gulp.dest(DEST_DIR))

	gulp.src('./vendors/**/*.css')
	.pipe(postcss(plugins))
	.pipe(cssbeautify())

	.pipe(rename('vendor.css'))
	.pipe(gulp.dest(DEST_DIR))
	
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(gulp.dest(DEST_DIR))

});

gulp.task('js', function() {
  gulp.src(['./vendors/**/*.js'])
    .pipe(uglify(uglifyOptions))
    .pipe(rename('vendor.js'))
    .pipe(gulp.dest(DEST_DIR))

    gulp.src([
		
		
        './js/bootstrap.min.js',
        './js/popper.js',
        './js/jquery-3.2.1.min.js',
    	// './js/*.js'
    	])
    // .pipe(uglify(uglifyOptions))
    .pipe(rename('main.js'))
    .pipe(gulp.dest(DEST_DIR))
});

// gulp.task('watch', function() {
//   gulp.watch('scss/**/*.scss', ['scss']);
// });

// // gulp.task('default', ['sass', 'serve']);

// gulp.task('default', function(done) {
//   runSequence('scss', 'watch', done);
// });

// gulp.task('build', function(done) {
//   runSequence('scss', done);
// });