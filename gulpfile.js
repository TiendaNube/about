// Packages
const { watch, src, dest, series } = require("gulp"),
	sass = require("gulp-sass"),
	imagemin = require("gulp-imagemin"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	del = require("del");

const path = {
	styles: 'src/sass/**/*.scss',
	scripts: [
		'node_modules/jquery/dist/jquery.js',
		'node_modules/lazysizes/lazysizes.js',
		'src/js/components/*.js',
		'src/js/*.js'],
	images: 'src/images/**/*.{jpg,gif,png}'
}

// Uglify JS
function jsmin() {
	return src(path.scripts)
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(dest('assets/js/'))
};

// Sass compiler and compress css
function styles() {
	return src(path.styles)
	.pipe(sass({outputStyle: 'compressed'
	})).on('error', function(err) {
			console.log('ERROR:', err.message);
	})
	.pipe(dest('assets/css/'))
};

// Images Task
function imageCompress() {
	return src(path.images)
	.pipe(imagemin({
		optimizationLevel: 7,
		progressive: true,
		interlaced: true
	}))
	.pipe(dest('assets/images/'))
};

// Clean Task
function clean(cb) {
	return del('assets/', cb);
}

function clean_css(cb) {
	return del('assets/css', cb);
}

function clean_js(cb) {
	return del('assets/js', cb);
}

function clean_images(cb) {
	return del('assets/images', cb);
}

function watcher() {
	watch(path.scripts, series(clean_js, jsmin));
	watch(path.styles, series(clean_css, styles));
	watch(path.images, series(clean_images, imageCompress));
}

exports.clean = clean;
exports.jsmin = jsmin;
exports.styles = styles;
exports.imageCompress = imageCompress;
exports.watcher = watcher;
exports.default = series(clean, jsmin, styles, imageCompress);
