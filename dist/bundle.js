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

	exports.AVLTree = _srcAVLTree2['default'];

	var _srcDisjointSet = __webpack_require__(4);

	var _srcDisjointSet2 = _interopRequireDefault(_srcDisjointSet);

	exports.DisjointSet = _srcDisjointSet2['default'];

	var _srcMaxFlow = __webpack_require__(5);

	var _srcMaxFlow2 = _interopRequireDefault(_srcMaxFlow);

	exports.maxFlow = _srcMaxFlow2['default'];

	var _srcFloydWarshall = __webpack_require__(6);

	var _srcFloydWarshall2 = _interopRequireDefault(_srcFloydWarshall);

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
	 * @providesModule DisjointSet
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var DisjointSet = (function () {

	  /**
	   * Create a disjoint set out of the given elements. Initially each element is
	   * its own set.
	   */

	  function DisjointSet(iterable) {
	    _classCallCheck(this, DisjointSet);

	    this._parent = new Map();
	    this._rank = new Map();
	    this._sets = 0;
	    if (iterable) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var x = _step.value;

	          this.add(x);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }

	  _createClass(DisjointSet, [{
	    key: 'add',

	    /**
	     * Add the element x to this disjoint set structure as its own set. This is a
	     * no-op if the set already contains x.
	     */
	    value: function add(x) {
	      if (this.has(x)) {
	        return;
	      }
	      this._parent.set(x, x);
	      this._rank.set(x, 0);
	      this._sets += 1;
	    }
	  }, {
	    key: 'has',

	    /**
	     * Check if this structure knows about the element x
	     */
	    value: function has(x) {
	      return this._parent.has(x);
	    }
	  }, {
	    key: 'sameSet',

	    /**
	     * Check if x and y are in the same set
	     */
	    value: function sameSet(x, y) {
	      return this.has(x) && this.has(y) && this._root(x) === this._root(y);
	    }
	  }, {
	    key: 'union',

	    /**
	     * Union the sets x and y are in to create one set
	     */
	    value: function union(x, y) {
	      if (!this.has(x) || !this.has(y)) {
	        return;
	      }

	      var xRoot = this._root(x);
	      var yRoot = this._root(y);
	      if (xRoot !== yRoot) {
	        // merge by rank
	        var xRank = this._rank.get(xRoot);
	        var yRank = this._rank.get(yRoot);
	        if (xRank < yRank) {
	          this._parent.set(xRoot, yRoot);
	        } else if (yRank < xRank) {
	          this._parent.set(yRoot, xRoot);
	        } else {
	          this._parent.set(xRoot, yRoot);
	          this._rank(xRoot, xRank + 1);
	        }
	        this._sets -= 1;
	      }
	    }
	  }, {
	    key: '_root',

	    /**
	     * This searches for the root of x, compressing the path along the way
	     */
	    value: function _root(x) {
	      if (this._parent.get(x) === x) {
	        return x;
	      }

	      // path compression
	      var root = this._root(this._parent.get(x));
	      this._parent.set(x, root);
	      return root;
	    }
	  }, {
	    key: 'size',

	    /**
	     * How many elements are in this structure
	     */
	    get: function get() {
	      return this._parent.size;
	    }
	  }, {
	    key: 'sets',

	    /**
	     * How many disjoint sets are in this structure
	     */
	    get: function get() {
	      return this._sets;
	    }
	  }], [{
	    key: 'of',

	    /**
	     * Static method that lets you create a disjoint set using varargs
	     */
	    value: function of() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return new DisjointSet(args);
	    }
	  }]);

	  return DisjointSet;
	})();

	exports['default'] = DisjointSet;
	module.exports = exports['default'];

/***/ },
/* 5 */
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
/* 6 */
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