var config = {
	global: {
		isWatching: true,
		isMinifyCSS: false
	},
	browserSync: {
		server: {
			baseDir: ['./build', './app']
		},
		files: ['./build/**']
	},
	browserify: {
		debug: true,
		bundleConfig: [{
			entries: './app/script/app.jsx',
			dest: './build',
			outputName: 'app.js'
		}]
	},
	app: {
		src: './app/**',
		build: './build'
	},
	markup: {
		web: './app/web/**',
		style: './app/style/**/*.less'
	}
};
var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var notify = require('gulp-notify');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

gulp.task('browserify', function(callback){
	var bundleQueue = config.browserify.bundleConfig.length;
	var browserifyThis = function(bundleConfig){
		var bundler = browserify({
			cache: {}, packageCache: {}, fullPath: false,
			entries: bundleConfig.entries,
			extensions: config.browserify.extensions,
			debug: config.browserify.debug
		});

		var bundle = function(){
			return bundler
				.bundle()
				.on('error', function(){
					var args = Array.prototype.slice.call(arguments);

					notify.onError({
						title: "Compile Error",
						message: "<%= error.message %>"
					}).apply(this, args);

					this.emit('end');
				})
				.pipe(source(bundleConfig.outputName))
				.pipe(gulp.dest(bundleConfig.dest))
				.on('end', reportFinished);
		};

		bundler.transform(babelify.configure({
			stage: 0,
			plugins: ['object-assign']
		}));

		if (config.global.isWatching) {
			bundler = watchify(bundler);
			bundler.on('update', bundle);
		};

		var reportFinished = function(){
			if (bundleQueue) {
				bundleQueue--;
				if (bundleQueue == 0) {
					callback();
				};
			};
		}

		return bundle();
	};

	config.browserify.bundleConfig.forEach(browserifyThis);
})

gulp.task('build', ['browserify', 'markup', 'lesstocss']);

gulp.task('browserSync', ['build'], function(){
	browserSync(config.browserSync);
})

gulp.task('lesstocss', function(){
	if (config.global.isMinifyCSS) {
		return gulp.src(config.markup.style)
			.pipe(less())
			.on('error', function(){
						var args = Array.prototype.slice.call(arguments);

						notify.onError({
							title: "Compile Error",
							message: "<%= error.message %>"
						}).apply(this, args);

						this.emit('end');
					})
			.pipe(minifyCSS())
			.pipe(gulp.dest(config.app.build));
	} else {
		return gulp.src(config.markup.style)
			.pipe(less())
			.on('error', function(){
						var args = Array.prototype.slice.call(arguments);

						notify.onError({
							title: "Compile Error",
							message: "<%= error.message %>"
						}).apply(this, args);

						this.emit('end');
					})
			.pipe(gulp.dest(config.app.build));
	}
})

gulp.task('markup', function() {
	return gulp.src(config.markup.web)
		.pipe(gulp.dest(config.app.build));
})

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.app.src, ['markup', 'lesstocss']);
})

gulp.task('default', ['watch']);