/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Задача 2

	// Используя Promise, асинхронно загрузите на страницу файл image.jpg, находящийся 
	// в папке Classwork рядом с файлом с задачами.
	'use strict';

	//Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), 
	//затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

	// Создаётся объект promise

	var promise = new Promise(function (resolve, reject) {

	    setTimeout(function () {
	        // переведёт промис в состояние fulfilled с результатом "result"
	        resolve("result");
	    }, 1000);
	});

	// promise.then навешивает обработчики на успешный результат или ошибку
	promise.then(function (result) {
	    // первая функция-обработчик - запустится при вызове resolve
	    alert("Fulfilled: " + result); // result - аргумент resolve
	}, function (error) {
	    // вторая функция - запустится при вызове reject
	    alert("Rejected: " + error); // error - аргумент reject
	});

/***/ }
/******/ ]);