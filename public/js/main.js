/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function() {

eval("let slide = document.querySelector('.slide');\r\nlet taste = document.querySelector('.taste-js');\r\nlet list = document.querySelector('.list-js');\r\nlet blog = document.querySelector('.blog-js');\r\nlet contribute = document.querySelector('.contribute-js');\r\nlet labels = document.querySelectorAll('.label');\r\n\r\n\r\nsetInterval(function() {\r\n    \r\n\tif(slide.classList.contains('one')) {\r\n        slide.classList.remove('one');\r\n        slide.classList.add('two');\r\n        blog.classList.add('active');\r\n        if(taste.classList.contains('active')) {\r\n            taste.classList.remove('active');\r\n        }\r\n    } else if (slide.classList.contains('two')) {\r\n        slide.classList.remove('two');\r\n        slide.classList.add('three');\r\n        list.classList.add('active');\r\n        blog.classList.remove('active');\r\n    } else if(slide.classList.contains('three')) {\r\n        slide.classList.remove('three');\r\n        slide.classList.add('four');\r\n        contribute.classList.add('active');\r\n        list.classList.remove('active');\r\n    } else if (slide.classList.contains('four')) {\r\n        slide.classList.remove('four');\r\n        slide.classList.add('one');\r\n        taste.classList.add('active');\r\n        contribute.classList.remove('active');\r\n    }\r\n    \r\n}, 4000);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://study-project/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;