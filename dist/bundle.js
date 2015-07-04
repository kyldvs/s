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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @flow
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcAVLTree = __webpack_require__(2);

	var _srcAVLTree2 = _interopRequireDefault(_srcAVLTree);

	var AVLTree = _srcAVLTree2['default'];
	exports.AVLTree = AVLTree;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * @flow
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AVLTree = function AVLTree(compare) {
	  _classCallCheck(this, AVLTree);

	  // Build a compare function that can handle nodes, null nodes are treated
	  // as positive infinity
	  this._compare = function (n1, n2) {
	    if (n1 && n2) {
	      return compare(n1.value, n2.value);
	    } else if (n1) {
	      return -1;
	    } else {
	      return 1;
	    }
	  };
	}

	// TODO: Implement the avl tree
	;

	exports["default"] = AVLTree;
	module.exports = exports["default"];

/***/ }
/******/ ]);