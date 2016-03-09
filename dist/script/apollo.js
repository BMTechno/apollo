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

	'use strict';

	var _modplug = __webpack_require__(1);

	var _modplug2 = _interopRequireDefault(_modplug);

	var _browser = __webpack_require__(2);

	var browser = _interopRequireWildcard(_browser);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ------------------------------------------------------------------------- *\
	 * This is it.
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	(function ($) {

	    var plugins = {
	        statics: {
	            browserDetect: browser.detect
	        }
	    };

	    (0, _modplug2.default)('apollo', plugins);

	    $(function () {
	        // Detect os
	        $.apollo.browserDetect();
	    });
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = modplug;
	function modplug(namespace, options) {
	    'use strict';

	    /**
	     * LICENSED | MIT
	     * Copyright (c) 2015 Lars Jung (http://larsjung.de)
	     */

	    // Some references to enhance minification.

	    var slice = [].slice;
	    var $ = jQuery;
	    var extend = $.extend;
	    var isFn = $.isFunction;

	    // Save the initial settings.
	    var settings = extend({}, options);

	    // Helper function to apply default methods.
	    function applyMethod(obj, args, methodName, methods) {

	        // If `methodName` is a function apply it to get the actual
	        // method name.
	        methodName = isFn(methodName) ? methodName.apply(obj, args) : methodName;

	        // If method exists then apply it and return the result ...
	        if (isFn(methods[methodName])) {
	            return methods[methodName].apply(obj, args);
	        }

	        // ... otherwise raise an error.
	        $.error('Method "' + methodName + '" does not exist on jQuery.' + namespace);
	    }

	    // This function gets exposed as `$.<namespace>`.
	    var statics = function statics() {

	        // Try to apply a default method.
	        return applyMethod(this, slice.call(arguments), settings.defaultStatic, statics);
	    };

	    // This function gets exposed as `$(selector).<namespace>`.
	    var methods = function methods(method) {

	        // If `method` exists then apply it ...
	        if (isFn(methods[method])) {
	            return methods[method].apply(this, slice.call(arguments, 1));
	        }

	        // ... otherwise try to apply a default method.
	        return applyMethod(this, slice.call(arguments), settings.defaultMethod, methods);
	    };

	    // Adds/overwrites plugin methods. This function gets exposed as
	    // `$.<namespace>.modplug` to make the plugin extendable.
	    function plug(options) {

	        if (options) {
	            extend(statics, options.statics);
	            extend(methods, options.methods);
	        }

	        // Make sure that `$.<namespace>.modplug` points to this function
	        // after adding new methods.
	        statics.modplug = plug;
	    }

	    // Save objects or methods previously registered to the desired namespace.
	    // They are available via `$.<namespace>.modplug.prev`.
	    plug.prev = {
	        statics: $[namespace],
	        methods: $.fn[namespace]
	    };

	    // Init the plugin by adding the specified statics and methods.
	    plug(options);

	    // Register the plugin.
	    $[namespace] = statics;
	    $.fn[namespace] = methods;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.detect = detect;
	/** ------------------------------------------------------------------------- *\
	 * Browser detection using Modernizr & Detectizr
	 * @depends Detectizr
	 * @depends Modernizr
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	function detect() {

	  if ((typeof Detectizr === 'undefined' ? 'undefined' : _typeof(Detectizr)) !== 'object') return;

	  var _d = Detectizr.os;

	  console.log('Apollo says:', 'You\'re using ' + _d.name + ' v' + _d.version);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=maps/apollo.js.map
