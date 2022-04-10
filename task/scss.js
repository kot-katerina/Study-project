const {src, dest} = require('gulp');

//конфигурация

const path = require('../config/path');


//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMedia = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoPrefixer = require('gulp-autoprefixer');




//обработка SCSS
const scss = () => {
    return src(path.scss.src, { sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'SCSS',
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMedia())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.scss.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(dest(path.scss.dest, { sourcemaps: true }))
}


module.exports = scss;