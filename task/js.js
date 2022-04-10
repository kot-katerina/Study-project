const {src, dest} = require('gulp');

//конфигурация

const path = require('../config/path');
const app = require('../config/app');

//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
//const uglify = require('gulp-uglify');
const webpackStream = require('webpack-stream');





//обработка JS
const js = () => {
    return src(path.js.src, { sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'JS',
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpackStream(app.webpack))
    //.pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: true }))
}


module.exports = js;