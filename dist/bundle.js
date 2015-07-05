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
	 * @providesModule s
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcAVLTree = __webpack_require__(2);

	var _srcAVLTree2 = _interopRequireDefault(_srcAVLTree);

	var _srcMaxFlow = __webpack_require__(4);

	var _srcMaxFlow2 = _interopRequireDefault(_srcMaxFlow);

	var _srcFloydWarshall = __webpack_require__(5);

	var _srcFloydWarshall2 = _interopRequireDefault(_srcFloydWarshall);

	exports.AVLTree = _srcAVLTree2['default'];
	exports.maxFlow = _srcMaxFlow2['default'];
	exports.floydWarshall = _srcFloydWarshall2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @providesModule AVLTree
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsInvariant = __webpack_require__(3);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var AVLTree = (function () {
	  function AVLTree(compare) {
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

	  _createClass(AVLTree, [{
	    key: 'at',
	    value: function at(index) {
	      (0, _utilsInvariant2['default'])(false);
	    }
	  }, {
	    key: 'get',
	    value: function get(index) {
	      (0, _utilsInvariant2['default'])(false);
	    }
	  }]);

	  return AVLTree;
	})();

	exports['default'] = AVLTree;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @providesModule invariant
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments to provide
	 * information about what broke and what you were expecting.
	 */

	exports['default'] = function (condition, format) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  if (!condition) {
	    var index = 0;
	    var message = format.replace(/%s/g, function () {
	      return args[index++];
	    });
	    var error = new Error('Invariant Violation: ' + message);
	    error.framesToPop = 1;
	    throw error;
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * @providesModule maxFlow
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function maxFlow() {
	  return 20;
	}

	exports['default'] = maxFlow;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @providesModule floydWarshall
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/**
	 * Given an adjacency matrix this function return a matrix containing the
	 * distance of the shortest path between each pair of vertices. Infinity if
	 * there is no path, and -Infinity if there is a negative cycle.
	 *
	 * matrix should be a square matrix where each element, matrix[u][v], represents
	 * the distance of the edge from vertex u to vertex v. Infinity if there is no
	 * such edge. 0 if u and v are the same vertex.
	 */
	function floydWarshall(matrix) {
	  var d = [];
	  var n = matrix.length;

	  // Initialization
	  for (var u = 0; u < n; u++) {
	    d.push([]);
	    for (var v = 0; v < n; v++) {
	      d[u].push(matrix[u][v]);
	    }
	    d[u][u] = 0;
	  }

	  // Update distances
	  for (var k = 0; k < n; k++) {
	    for (var i = 0; i < n; i++) {
	      for (var j = 0; j < n; j++) {
	        if (d[i][k] + d[k][j] < d[i][j]) {
	          d[i][j] = d[i][k] + d[k][j];
	        }
	      }
	    }
	  }

	  // Check for negative cycles
	  for (var u = 0; u < n; u++) {
	    if (d[u][u] < 0) {
	      for (var v = 0; v < n; v++) {
	        if (d[v][u] !== Infinity) {
	          d[v][u] = -Infinity;
	        }
	      }
	    }
	  }

	  return d;
	}

	exports['default'] = floydWarshall;
	module.exports = exports['default'];

/***/ }
/******/ ]);