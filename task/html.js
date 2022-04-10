//подключение

const {src, dest} = require('gulp');
const browserSync = require('browser-sync').create();

//конфигурация

const path = require('../config/path');
const app = require('../config/app');



//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const size = require('gulp-size');




//обработка HTML
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(dest(path.html.dest))
    .pipe(browserSync.stream());
}


module.exports = html;