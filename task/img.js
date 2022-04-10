const {src, dest} = require('gulp');

//конфигурация

const path = require('../config/path');
const app = require('../config/app');

//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


//обработка IMG
const img = () => {
    return src(path.img.src)
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'IMG',
            message: error.message
        }))
    }))
    .pipe(dest(path.img.dest))
}


module.exports = img;