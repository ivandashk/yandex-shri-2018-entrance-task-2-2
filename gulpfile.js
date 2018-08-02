const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch');

const browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('html', () => {
    return gulp.src('./src/templates/**/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.stream())
})

gulp.task('css', () => {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.stream())
})

gulp.task('build', gulp.parallel('html', 'css'))

gulp.task('serve', () => {
    browserSync.init({
        server: './public'
    });
    watch('./src/templates/**/*.pug', gulp.series('html'));
    watch('./src/styles/**/*.scss', gulp.series('css'));
    watch('*.html').on('change', reload);
})

gulp.task('default', gulp.series('build', 'serve'));