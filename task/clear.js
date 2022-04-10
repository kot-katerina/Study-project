//подключение

const del = require('del');

//конфигурация

const path = require('../config/path');

//удаление папок
const clear = ()=> {
    return del(path.root);
}


module.exports = clear;