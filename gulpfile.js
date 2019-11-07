const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const jsmin = require('gulp-jsmin');

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(jsmin())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('fonts', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('icons', function () {
    return gulp.src('./src/icons/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/icons'));
});

gulp.task('images', function () {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('styles', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
    gulp.watch('./src/icons/**/*', gulp.parallel('icons'));
    gulp.watch('./src/img/**/*', gulp.parallel('images'));
    gulp.watch('./src/sass/**/*.scss', gulp.parallel('styles'));

    gulp.watch('./src/**/*').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('server', 'html', 'js', 'fonts', 'icons', 'images', 'styles', 'watch'));