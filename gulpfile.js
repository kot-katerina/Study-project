//подключение

const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

//конфигурация 

const path = require('./config/path.js');


//задачи
const clear = require('./task/clear.js');
const html = require('./task/html');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');


//сервер

const server = ()=> {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

const watcher = ()=> {
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
}



//эксппорт
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.watch = watcher;
exports.clear = clear;
exports.dev = series(
    clear,
    img,
    html,
    parallel(scss, js),
    parallel(watcher, server)
);

